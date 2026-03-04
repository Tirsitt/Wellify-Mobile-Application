import { Item, items } from '@/mockData';
import { COLORS, SHADOW, SPACING } from '@/styles';
import React from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// HomeScreen displays a vertical list of cards using FlatList. The layout
// directly reflects the Pinterest board's modern card-style UI: each item has
// generous padding, rounded corners, a soft shadow and an optional pastel
// background colour for variety. A large "Discover" header at the top echoes
// the minimalist, friendly look of the board. Touching a card navigates to
// Detail with the item's ID.

type Props = { navigation: any };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: ListRenderItemInfo<Item>) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: item.backgroundColor || COLORS.cardBackground },
      ]}
      onPress={() => navigation.navigate('Detail', { itemId: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.medium,
  },
  listContent: {
    paddingBottom: SPACING.medium,
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16, // softer, more modern rounding
    padding: SPACING.medium,
    ...SHADOW,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: SPACING.tiny,
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  separator: {
    height: SPACING.medium * 0.75,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: SPACING.large,
    color: COLORS.textPrimary,
  },
});
