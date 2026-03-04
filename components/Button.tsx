import { SPACING } from '@/styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
}

// Reusable button with soft pastel accent background and rounded corners.
// Used for actions like "Like", "Comment", "Submit" etc.
const AppButton: React.FC<AppButtonProps> = ({ title, style, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B39DDB', // pastel lavender accent
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.large,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppButton;
