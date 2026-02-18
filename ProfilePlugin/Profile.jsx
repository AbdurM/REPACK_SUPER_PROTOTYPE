import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Profile = ({ isAuthenticated }) => {
  // Just call it for the purpose of the POC.
  const systemName = DeviceInfo.getSystemName();

  return (
    <SafeAreaView style={styles.safeArea}>
      {isAuthenticated ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarInitial}>A</Text>
            </View>
            <View>
              <Text style={styles.name}>Abdur Mohammed</Text>
              <Text style={styles.fund}>FutureBuild Super</Text>
              <Text style={styles.memberId}>Member · 482910</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact details</Text>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Email</Text>
              <Text style={styles.rowValue}>abdur.mohammed@email.com</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Phone</Text>
              <Text style={styles.rowValue}>+61 400 123 456</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Address</Text>
              <Text style={styles.rowValue}>12 Bridge Street, Sydney NSW</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account details</Text>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Fund type</Text>
              <Text style={styles.rowValue}>MySuper balanced</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Employer</Text>
              <Text style={styles.rowValue}>SSNC</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Joined</Text>
              <Text style={styles.rowValue}>18 May 2019</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferred communication</Text>
            <Text style={styles.note}>
              Statements emailed quarterly. Notifications sent by text for
              contributions and insurance updates.
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.authNotice}>
          <Text style={styles.authTitle}>You're almost there</Text>
          <Text style={styles.authMessage}>
            Please verify your identity to view your profile and contact details.
          </Text>
          <Text style={styles.authHint}>It only takes a moment.</Text>
        </View>
      )}
    </SafeAreaView>
  )
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 24,
    gap: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: 'navy',
  },
  fund: {
    color: 'slategray',
    marginTop: 4,
  },
  memberId: {
    color: 'dimgray',
    marginTop: 2,
  },
  section: {
    borderRadius: 16,
    backgroundColor: 'whitesmoke',
    padding: 20,
    gap: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'midnightblue',
  },
  row: {
    gap: 4,
  },
  rowLabel: {
    color: 'dimgray',
  },
  rowValue: {
    color: 'black',
    fontWeight: '600',
  },
  note: {
    color: 'slategray',
    lineHeight: 20,
  },
  authNotice: {
    margin: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#f7f9ff',
    borderWidth: 1,
    borderColor: '#d8e2ff',
  },
  authTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e2a5a',
  },
  authMessage: {
    marginTop: 8,
    color: '#3a4a7a',
    lineHeight: 20,
  },
  authHint: {
    marginTop: 6,
    color: '#6b7bb0',
    fontSize: 12,
  },
});
