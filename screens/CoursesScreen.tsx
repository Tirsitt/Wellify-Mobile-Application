import VideoCard from '@/components/VideoCard';
import { Course, courses } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// List of course lessons. Each card shows title, duration, and a play icon. Tap
// navigates to a mock detail screen.

// navigation prop typing can be added if desired; using any for now
type Props = any;

const CoursesScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}>
      <VideoCard
        imageUrl={item.imageUrl}
        title={item.title}
        duration={item.duration}
        videoDuration={item.videoDuration}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(c) => c.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: SPACING.large }}
      />
    </SafeAreaView>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.medium },
  header: { fontSize: 24, fontWeight: '700', marginBottom: SPACING.large, color: COLORS.textPrimary },
  row: { flexDirection: 'row', alignItems: 'center' },
  courseInfo: { marginLeft: SPACING.small },
  title: { fontSize: 16, fontWeight: '600', color: COLORS.textPrimary },
  duration: { fontSize: 14, color: COLORS.textSecondary },
});
