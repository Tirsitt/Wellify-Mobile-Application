import AppButton from '@/components/Button';
import Card from '@/components/Card';
import { COLORS, SPACING } from '@/styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Simple forum listing with a button to create new topic
const mockTopics = [
  { id: 't1', title: 'Fertility tips', replies: 10 },
  { id: 't2', title: 'Nutrition advice', replies: 5 },
];

const ForumScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forum</Text>
      <AppButton title="New Topic" onPress={() => navigation.navigate('NewMessage' as any)} />
      <FlatList
        data={mockTopics}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Text style={styles.topicTitle}>{item.title}</Text>
              <Text style={styles.topicReplies}>{item.replies} replies</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ForumScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.medium },
  header: { fontSize: 24, fontWeight: '700', marginBottom: SPACING.large, color: COLORS.textPrimary },
  topicTitle: { fontSize: 16, fontWeight: '600', color: COLORS.textPrimary },
  topicReplies: { fontSize: 12, color: COLORS.textSecondary, marginTop: SPACING.tiny },
});
