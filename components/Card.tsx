import { COLORS, SHADOW, SPACING } from '@/styles';
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

// Card wrapper with rounded corners, padding, and soft shadow.
const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: SPACING.medium,
    marginVertical: SPACING.small,
    ...SHADOW,
  },
});

export default Card;
