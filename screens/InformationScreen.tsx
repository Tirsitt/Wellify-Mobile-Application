import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Enhanced educational content with card sections and icons
const InformationScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title="Learning" />
    <ScrollView contentContainerStyle={styles.body}>
      <Card>
        <Text style={styles.paragraph}>
          Our wellness education program is based on scientific research and best
          practices. We aim to share the foundations of healthy and happy living with you.
        </Text>
      </Card>

      <Text style={styles.subheader}>Key Benefits</Text>

      <Card>
        <View style={styles.bulletItem}>
          <Ionicons name="water" size={20} color={COLORS.pastelBlue} />
          <View style={styles.bulletContent}>
            <Text style={styles.bulletTitle}>Improved Circulation</Text>
            <Text style={styles.bulletText}>Enhance blood flow with regular exercise and meditation.</Text>
          </View>
        </View>
      </Card>

      <Card>
        <View style={styles.bulletItem}>
          <Ionicons name="heart" size={20} color={COLORS.pastelPeach} />
          <View style={styles.bulletContent}>
            <Text style={styles.bulletTitle}>Stress Relief</Text>
            <Text style={styles.bulletText}>Manage stress effectively with mindfulness and yoga.</Text>
          </View>
        </View>
      </Card>

      <Card>
        <View style={styles.bulletItem}>
          <Ionicons name="checkmark-circle" size={20} color={COLORS.pastelMint} />
          <View style={styles.bulletContent}>
            <Text style={styles.bulletTitle}>Healthy Weight</Text>
            <Text style={styles.bulletText}>Achieve your ideal weight through proper nutrition and activities.</Text>
          </View>
        </View>
      </Card>

      <Card>
        <Text style={styles.paragraph}>
          Complete our learning modules sequentially to track your progress and earn certificates.
        </Text>
      </Card>
    </ScrollView>
  </View>
);

export default InformationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  body: { paddingHorizontal: SPACING.medium },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginVertical: SPACING.small,
    color: COLORS.textPrimary,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: SPACING.small,
    color: COLORS.textPrimary,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletContent: { marginLeft: SPACING.medium, flex: 1 },
  bulletTitle: { fontSize: 15, fontWeight: '600', color: COLORS.textPrimary, marginBottom: SPACING.tiny },
  bulletText: { fontSize: 13, color: COLORS.textSecondary, lineHeight: 18 },
});
