import AppButton from '@/components/Button';
import Card from '@/components/Card';
import { homeworkPosts, Post } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Social-style homework posts with engagement metrics and actions.
const HomeworkScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity>
      <Card>
        <Text style={styles.author}>{item.author} • {item.time}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
        <View style={styles.metricsRow}>
          <Ionicons name="heart" size={16} color={COLORS.textSecondary} />
          <Text style={styles.metricText}>{item.likes}</Text>
          <Ionicons name="chatbubble" size={16} color={COLORS.textSecondary} style={styles.metricIcon} />
          <Text style={styles.metricText}>{item.comments}</Text>
          <Ionicons name="eye" size={16} color={COLORS.textSecondary} style={styles.metricIcon} />
          <Text style={styles.metricText}>{item.views}</Text>
        </View>
        <View style={styles.actionsRow}>
          <AppButton title="Like" />
          <AppButton title="Comment" style={{ marginLeft: SPACING.small }} />
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Community Posts</Text>
      <FlatList
        data={homeworkPosts}
        keyExtractor={(p) => p.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: SPACING.large }}
      />
    </SafeAreaView>
  );
};

export default HomeworkScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.medium },
  header: { fontSize: 24, fontWeight: '700', marginBottom: SPACING.large, color: COLORS.textPrimary },
  author: { fontSize: 12, color: COLORS.textSecondary, marginBottom: SPACING.tiny },
  title: { fontSize: 16, fontWeight: '600', marginBottom: SPACING.small, color: COLORS.textPrimary },
  body: { fontSize: 14, color: COLORS.textPrimary, marginBottom: SPACING.small },
  metricsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.small },
  metricText: { marginLeft: 4, fontSize: 12, color: COLORS.textSecondary },
  metricIcon: { marginLeft: SPACING.small },
  actionsRow: { flexDirection: 'row' },
});