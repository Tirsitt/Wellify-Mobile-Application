import { COLORS, RADIUS, SHADOW, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface VideoCardProps {
  imageUrl?: string;
  title: string;
  duration: string;
  videoDuration: string;
  onPress?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  imageUrl,
  title,
  duration,
  videoDuration,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            defaultSource={require('../assets/images/icon.png')}
          />
        )}
        {!imageUrl && <View style={styles.imagePlaceholder} />}
        
        {/* Play button overlay */}
        <View style={styles.playButtonContainer}>
          <View style={styles.playButton}>
            <Ionicons name="play" size={32} color="#fff" />
          </View>
        </View>

        {/* Duration badge */}
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{videoDuration}</Text>
        </View>
      </View>

      {/* Content below image */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: RADIUS,
    overflow: 'hidden',
    marginBottom: SPACING.medium,
    ...SHADOW,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    backgroundColor: COLORS.inputBackground,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.inputBackground,
  },
  playButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: SPACING.small,
    right: SPACING.small,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: SPACING.small,
    paddingVertical: 4,
    borderRadius: 4,
  },
  durationText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  content: {
    padding: SPACING.medium,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
    lineHeight: 22,
  },
  duration: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
});
