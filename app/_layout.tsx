import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import AppNavigator from '@/navigation/AppNavigator';

/**
 * RootLayout wraps our custom AppNavigator. Expo Router already provides a
 * NavigationContainer around this file, so adding another one caused the
 * "nested NavigationContainer" error. Removing the extra wrapper keeps a single
 * container at the root while still letting us use our explicit stack file.
 */
export default function RootLayout() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
