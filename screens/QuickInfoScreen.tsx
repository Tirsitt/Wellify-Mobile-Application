import Card from '@/components/Card';
import { InfoCard, infoCards } from '@/mockData';
import { COLORS, RADIUS, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Short informational cards with like/comment metadata
const QuickInfoScreen: React.FC = () => {
  const renderItem = ({ item }: { item: InfoCard }) => (
    <TouchableOpacity>
      <Card>
        {item.imageUrl && <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />}
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.preview}>{item.preview}</Text>
          <View style={styles.metricsRow}>
            <Ionicons name="heart" size={16} color={COLORS.textSecondary} />
            <Text style={styles.metricText}>{item.likes}</Text>
            <Ionicons name="chatbubble" size={16} color={COLORS.textSecondary} style={styles.metricIcon} />
            <Text style={styles.metricText}>{item.comments}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Quick Info</Text>
      <FlatList
        data={infoCards}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: SPACING.large }}
      />
    </SafeAreaView>
  );
};

export default QuickInfoScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.medium },
  header: { fontSize: 24, fontWeight: '700', marginBottom: SPACING.large, color: COLORS.textPrimary },
  title: { fontSize: 16, fontWeight: '600', marginBottom: SPACING.small, color: COLORS.textPrimary },
  preview: { fontSize: 14, color: COLORS.textPrimary, marginBottom: SPACING.small },
  metricsRow: { flexDirection: 'row', alignItems: 'center' },
  metricText: { marginLeft: 4, fontSize: 12, color: COLORS.textSecondary },
  metricIcon: { marginLeft: SPACING.small },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  },
  cardContent: {
    padding: SPACING.medium,
  },
});
