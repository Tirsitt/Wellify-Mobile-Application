import { COLORS, SPACING } from '@/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

// Simple header component used at the top of screens.
const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.large,
    paddingHorizontal: SPACING.medium,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});

export default Header;
