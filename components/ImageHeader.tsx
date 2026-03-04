import { COLORS, RADIUS, SHADOW, SPACING } from '@/styles';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ImageHeaderProps {
  imageUrl?: string;
  title?: string;
  height?: number;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({
  imageUrl,
  title,
  height = 180,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={[styles.image, { height }]}
          defaultSource={require('../assets/images/icon.png')}
        />
      )}
      {!imageUrl && (
        <View style={[styles.imagePlaceholder, { height }]} />
      )}
      
      {title && (
        <View style={styles.titleOverlay}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: SPACING.medium,
    borderRadius: RADIUS,
    overflow: 'hidden',
    ...SHADOW,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    width: '100%',
    backgroundColor: COLORS.inputBackground,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: SPACING.medium,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    lineHeight: 28,
  },
});
