import { COLORS, SPACING } from '@/styles';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom drawer content with top profile section and default item list.
const CustomDrawerContent: React.FC<any> = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.profileName}>Hello, User</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    padding: SPACING.large,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});

export default CustomDrawerContent;
