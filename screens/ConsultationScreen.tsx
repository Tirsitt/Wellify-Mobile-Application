import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ConsultationScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title="Consultation" />
    <ScrollView contentContainerStyle={styles.content}>
      <Card>
        <Text style={styles.cardTitle}>Expert Consultation</Text>
        <Text style={styles.cardBody}>
          Our health service offers personalized guidance from certified wellness consultants.
        </Text>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Our Services</Text>
        <Text style={styles.cardBody}>✓ Personal health coaching</Text>
        <Text style={styles.cardBody}>✓ Lifestyle management</Text>
        <Text style={styles.cardBody}>✓ Nutrition planning</Text>
        <Text style={styles.cardBody}>✓ Stress management</Text>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Get in Touch</Text>
        <Text style={styles.cardBody}>We have an online booking system available.</Text>
        <Text style={styles.cardBody}>We operate Monday-Friday, 09:00-18:00.</Text>
      </Card>
    </ScrollView>
  </View>
);

export default ConsultationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: SPACING.small, color: COLORS.textPrimary },
  cardBody: { fontSize: 14, color: COLORS.textPrimary, lineHeight: 22, marginBottom: SPACING.tiny },
});
