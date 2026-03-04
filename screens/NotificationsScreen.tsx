import Card from '@/components/Card';
import Header from '@/components/Header';
import { Notification, notifications } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import React, { useCallback, useState } from 'react';
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

// Notifications screen shows notification cards with pull-to-refresh.
const NotificationsScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={[styles.message, { color: COLORS.textPrimary }]}>{item.message}</Text>
        <Text style={[styles.timestamp, { color: COLORS.textMuted }]}>{item.timestamp}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.background }]}>
      <Header title="Notifications" />
      <FlatList
        data={notifications}
        keyExtractor={(n) => n.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={{ padding: SPACING.medium }}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { marginHorizontal: SPACING.medium },
  message: { fontSize: 14, marginBottom: SPACING.tiny },
  timestamp: { fontSize: 12 },
});