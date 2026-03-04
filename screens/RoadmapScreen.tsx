import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RoadmapScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title="My Roadmap" />
    <ScrollView contentContainerStyle={styles.content}>
      <Card style={styles.card}>
        <Text style={styles.phase}>Phase 1: Getting Started</Text>
        <Text style={styles.desc}>✓ Create profile</Text>
        <Text style={styles.desc}>✓ Initial assessment</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.phase}>Phase 2: Progress</Text>
        <Text style={styles.desc}>✓ Complete courses</Text>
        <Text style={styles.desc}>✓ Task achievements</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.phase}>Phase 3: Success</Text>
        <Text style={styles.desc}>✓ Reach your goals</Text>
        <Text style={styles.desc}>✓ Earn certificates</Text>
      </Card>
    </ScrollView>
  </View>
);

export default RoadmapScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  card: { marginBottom: SPACING.medium },
  phase: { fontSize: 18, fontWeight: '700', marginBottom: SPACING.small, color: COLORS.textPrimary },
  desc: { fontSize: 14, color: COLORS.textPrimary, marginBottom: SPACING.tiny },
});
