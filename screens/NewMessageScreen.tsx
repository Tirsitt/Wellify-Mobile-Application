import AppButton from '@/components/Button';
import { forumRecipients } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
// use community picker for dropdown
import { Picker } from '@react-native-picker/picker';

// New topic form for forum messages.
const NewMessageScreen: React.FC = () => {
  const [recipient, setRecipient] = useState(forumRecipients[0]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    // mock submission
    alert('Message sent successfully!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Recipient</Text>
        {Platform.OS === 'ios' ? (
          <Picker selectedValue={recipient} onValueChange={(v: string) => setRecipient(v)}>
            {forumRecipients.map((r) => (
              <Picker.Item key={r} label={r} value={r} />
            ))}
          </Picker>
        ) : (
          <Picker selectedValue={recipient} onValueChange={(v: string) => setRecipient(v)}>
            {forumRecipients.map((r) => (
              <Picker.Item key={r} label={r} value={r} />
            ))}
          </Picker>
        )}

        <Text style={styles.label}>Subject</Text>
        <TextInput style={styles.input} value={subject} onChangeText={setSubject} />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <AppButton title="Send" onPress={onSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewMessageScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.textPrimary, marginTop: SPACING.small },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
  },
  textArea: { height: 120, textAlignVertical: 'top' },
});
