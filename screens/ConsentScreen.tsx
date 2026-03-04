import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ConsentScreen: React.FC = () => {
  const [consented, setConsented] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Terms & Consent" />
      <ScrollView contentContainerStyle={styles.content}>
        <Card>
          <Text style={styles.sectionTitle}>Information</Text>
          <Text style={styles.body}>
            This app provides wellness information but does not replace professional medical
            advice. Please consult a doctor for health concerns.
          </Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Data Privacy</Text>
          <Text style={styles.body}>
            Your personal data is kept private and is not shared with third parties
            beyond app functionality.
          </Text>
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>Terms of Use</Text>
          <Text style={styles.body}>
            By using this app, you accept these terms. Please read all disclaimers and
            responsibility clauses carefully.
          </Text>
        </Card>

        <TouchableOpacity
          style={[styles.checkbox, consented && styles.checkedBox]}
          onPress={() => setConsented(!consented)}
        >
          {consented && <Ionicons name="checkmark" size={20} color="#fff" />}
        </TouchableOpacity>
        <Text style={styles.consentText}>
          I have read and agree to all terms and conditions.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ConsentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium, paddingBottom: SPACING.large },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: SPACING.small, color: COLORS.textPrimary },
  body: { fontSize: 13, color: COLORS.textPrimary, lineHeight: 20 },
  checkbox: { width: 24, height: 24, borderWidth: 2, borderColor: COLORS.textSecondary, borderRadius: 4, marginTop: SPACING.medium, justifyContent: 'center', alignItems: 'center' },
  checkedBox: { backgroundColor: '#B39DDB', borderColor: '#B39DDB' },
  consentText: { fontSize: 12, color: COLORS.textPrimary, marginTop: SPACING.small, marginLeft: SPACING.small },
});
