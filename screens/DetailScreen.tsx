import { items } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// DetailScreen shows a larger title and a paragraph of description. Spacing
// and typography continue the modern, clean feel of the Home cards, using
// generous padding, a bold header and calm secondary text—just like a detail
// panel on the Pinterest moodboard. The plain white background keeps the focus
// on the content.

type Props = { route: any };

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { itemId } = route.params;
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: SPACING.medium,
    color: COLORS.textPrimary,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.textSecondary,
  },
});
