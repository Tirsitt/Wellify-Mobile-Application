import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const blogPosts = [
  {
    id: 'b1',
    title: '5 Steps to a Healthy Life',
    date: 'March 2, 2026',
    excerpt: 'Simple ways to optimize your daily routine...',
  },
  {
    id: 'b2',
    title: 'Stress Management Techniques',
    date: 'February 28, 2026',
    excerpt: 'Reduce stress with mindfulness and yoga...',
  },
  {
    id: 'b3',
    title: 'Nutrition and Wellness',
    date: 'February 25, 2026',
    excerpt: 'The importance of proper eating habits...',
  },
];

const BlogScreen: React.FC = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity>
      <Card>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.excerpt}>{item.excerpt}</Text>
        <Text style={styles.readMore}>Read More →</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Blog" />
      <FlatList data={blogPosts} keyExtractor={(b) => b.id} renderItem={renderItem} />
    </View>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  title: { fontSize: 18, fontWeight: '700', marginBottom: SPACING.small, color: COLORS.textPrimary },
  date: { fontSize: 12, color: COLORS.textSecondary, marginBottom: SPACING.small },
  excerpt: { fontSize: 14, color: COLORS.textPrimary, marginBottom: SPACING.small, lineHeight: 20 },
  readMore: { fontSize: 13, color: '#B39DDB', fontWeight: '600' },
});
