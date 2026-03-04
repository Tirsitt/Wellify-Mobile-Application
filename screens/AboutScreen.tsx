import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title="About" />
    <ScrollView contentContainerStyle={styles.content}>
      <Card>
        <Text style={styles.title}>Wellness Guide</Text>
        <Text style={styles.body}>
          Wellness Guide is a modern mobile app providing personalized guidance
          on healthy living and wellness.
        </Text>
      </Card>

      <Card>
        <Text style={styles.title}>Our Mission</Text>
        <Text style={styles.body}>
          To empower everyone to live a healthy, happy, and balanced life by providing
          the knowledge, tools, and support they need.
        </Text>
      </Card>

      <Card>
        <Text style={styles.title}>Our Vision</Text>
        <Text style={styles.body}>
          To lead the global wellness movement and accompany millions on their
          health journeys.
        </Text>
      </Card>

      <Card>
        <Text style={styles.title}>Our Team</Text>
        <Text style={styles.body}>
          Our expert team of doctors, nutritionists, yoga instructors, and wellness
          consultants are here to help.
        </Text>
      </Card>
    </ScrollView>
  </View>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  title: { fontSize: 18, fontWeight: '700', marginBottom: SPACING.small, color: COLORS.textPrimary },
  body: { fontSize: 14, color: COLORS.textPrimary, lineHeight: 22 },
});
