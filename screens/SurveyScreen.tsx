import AppButton from '@/components/Button';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SurveyScreen: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const options = ['Very Good', 'Good', 'Fair', 'Poor'];

  return (
    <View style={styles.container}>
      <Header title="Wellness Survey" />
      <ScrollView contentContainerStyle={styles.content}>
        <Card>
          <Text style={styles.questionText}>How stressed did you feel this week?</Text>
          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.option,
                  selectedAnswer === option && styles.selectedOption,
                ]}
                onPress={() => setSelectedAnswer(option)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedAnswer === option && styles.selectedText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <Card>
          <Text style={styles.questionText}>Do you get regular sleep?</Text>
          <View style={styles.optionsContainer}>
            {['Yes', 'No', 'Sometimes'].map((option) => (
              <TouchableOpacity key={option} style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <AppButton title="Submit Answers" onPress={() => alert('Thank you!')} />
      </ScrollView>
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  questionText: { fontSize: 16, fontWeight: '600', color: COLORS.textPrimary, marginBottom: SPACING.medium },
  optionsContainer: { flexDirection: 'column' },
  option: { paddingVertical: SPACING.small, paddingHorizontal: SPACING.medium, backgroundColor: '#f5f5f5', borderRadius: 8, marginBottom: SPACING.small },
  selectedOption: { backgroundColor: '#B39DDB' },
  optionText: { fontSize: 14, color: COLORS.textPrimary },
  selectedText: { color: '#fff', fontWeight: '600' },
});
