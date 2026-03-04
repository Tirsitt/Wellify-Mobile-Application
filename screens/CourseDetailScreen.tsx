import VideoCard from '@/components/VideoCard';
import { courses } from '@/mockData';
import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

// mock video detail screen

const CourseDetailScreen: React.FC<any> = ({ route }) => {
  const { courseId } = route.params;
  const course = courses.find((c) => c.id === courseId);

  return (
    <SafeAreaView style={styles.container}>
      <VideoCard
        imageUrl={course?.imageUrl}
        title={course?.title || 'Course'}
        duration={course?.duration || ''}
        videoDuration={course?.videoDuration || ''}
      />
      <Text style={styles.description}>Duration: {course?.duration}</Text>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: SPACING.medium },
  description: { fontSize: 14, color: COLORS.textPrimary },
});
