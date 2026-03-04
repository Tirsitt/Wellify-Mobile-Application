import { COLORS, SPACING } from '@/styles';
import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

// CreateScreen is an optional third screen allowing the user to enter a new
// item. The form fields have the same rounded inputs and soft backgrounds used
// elsewhere to keep the UI consistent with the card-based moodboard.

type Props = { navigation: any };

const CreateScreen: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = () => {
    // Since we're using mock data we don't actually persist anything. In a
    // real application this is where we'd dispatch an action or call an API.
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.formGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Subtitle</Text>
        <TextInput
          style={styles.input}
          value={subtitle}
          onChangeText={setSubtitle}
          placeholder="Enter subtitle"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
        />
      </View>
      <Button title="Save" onPress={onSave} />
    </KeyboardAvoidingView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  formGroup: {
    marginBottom: SPACING.medium * 0.75,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.tiny,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
