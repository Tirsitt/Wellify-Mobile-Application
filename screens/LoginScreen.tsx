import AppButton from '@/components/Button';
import { COLORS, RADIUS, SPACING } from '@/styles';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Mock authentication - just navigate to drawer
    if (email && password) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'DrawerNavigator' }],
      });
    }
  };

  const handleGuestLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'DrawerNavigator' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Hero Image */}
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=300&fit=crop',
            }}
            style={styles.heroImage}
          />

          {/* App Branding */}
          <View style={styles.brandingSection}>
            <Text style={styles.appName}>Wellness Guide</Text>
            <Text style={styles.tagline}>Your personal wellness journey starts here</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="username@example.com"
                placeholderTextColor={COLORS.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.textMuted}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Sign In Button */}
            <AppButton
              title="Sign In"
              onPress={handleSignIn}
              style={styles.signInButton}
            />

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.divider} />
            </View>

            {/* Guest Button */}
            <TouchableOpacity
              style={styles.guestButton}
              onPress={handleGuestLogin}
            >
              <Text style={styles.guestButtonText}>Continue as Guest</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footerSection}>
            <Text style={styles.footerText}>By signing in, you agree to our Terms & Privacy Policy</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SPACING.large,
  },
  heroImage: {
    width: '100%',
    height: 250,
    backgroundColor: COLORS.inputBackground,
  },
  brandingSection: {
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.xlarge,
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  formSection: {
    paddingHorizontal: SPACING.large,
    marginBottom: SPACING.xlarge,
  },
  inputContainer: {
    marginBottom: SPACING.large,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.small,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: RADIUS,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
    fontSize: 15,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  signInButton: {
    marginTop: SPACING.medium,
    marginBottom: SPACING.large,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.large,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    marginHorizontal: SPACING.medium,
    fontSize: 13,
    color: COLORS.textMuted,
  },
  guestButton: {
    borderWidth: 1.5,
    borderColor: COLORS.accentLavender,
    borderRadius: RADIUS,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    alignItems: 'center',
    marginBottom: SPACING.large,
  },
  guestButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.accentLavender,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.accentLavender,
  },
  footerSection: {
    paddingHorizontal: SPACING.large,
    paddingTop: SPACING.large,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
});
