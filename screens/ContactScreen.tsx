import AppButton from '@/components/Button';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { COLORS, SPACING } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title="Contact Us" />
    <ScrollView contentContainerStyle={styles.content}>
      <Card>
        <View style={styles.contactRow}>
          <Ionicons name="call" size={20} color={COLORS.textSecondary} />
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+1-555-123-4567</Text>
          </View>
        </View>
      </Card>

      <Card>
        <View style={styles.contactRow}>
          <Ionicons name="mail" size={20} color={COLORS.textSecondary} />
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>info@wellness.app</Text>
          </View>
        </View>
      </Card>

      <Card>
        <View style={styles.contactRow}>
          <Ionicons name="location" size={20} color={COLORS.textSecondary} />
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>123 Wellness St, New York, NY 10001</Text>
          </View>
        </View>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Social Media</Text>
        <View style={styles.socialRow}>
          <Ionicons name="logo-instagram" size={24} color={COLORS.textSecondary} />
          <Ionicons name="logo-facebook" size={24} color={COLORS.textSecondary} style={{ marginLeft: SPACING.medium }} />
          <Ionicons name="logo-twitter" size={24} color={COLORS.textSecondary} style={{ marginLeft: SPACING.medium }} />
        </View>
      </Card>

      <AppButton title="Send Message" onPress={() => alert('Your message has been sent!')} />
    </ScrollView>
  </View>
);

export default ContactScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.medium },
  contactRow: { flexDirection: 'row', alignItems: 'flex-start' },
  contactInfo: { marginLeft: SPACING.medium, flex: 1 },
  label: { fontSize: 12, color: COLORS.textSecondary, marginBottom: SPACING.tiny },
  value: { fontSize: 14, color: COLORS.textPrimary, fontWeight: '600' },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: SPACING.medium, color: COLORS.textPrimary },
  socialRow: { flexDirection: 'row' },
});
