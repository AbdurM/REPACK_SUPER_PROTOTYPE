import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type PrelandingProps = {
  onLoginPress: () => void;
};

export default function Prelanding({ onLoginPress }: PrelandingProps) {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.logoWrap}>
          <Text style={styles.logoText}>SS</Text>
          <View style={styles.logoBar}>
            <Text style={styles.logoAmp}>&amp;</Text>
          </View>
          <Text style={styles.logoText}>C</Text>
        </View>
        <Text style={styles.tagline}>Secure your future</Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>How to get access?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F479F',
    paddingHorizontal: 22,
    paddingBottom: 28,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 58,
    lineHeight: 60,
    fontWeight: '800',
    letterSpacing: -1.2,
  },
  logoBar: {
    width: 40,
    height: 94,
    marginHorizontal: 3,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAmp: {
    color: '#163C8A',
    fontSize: 48,
    lineHeight: 52,
    fontWeight: '800',
  },
  tagline: {
    marginTop: 12,
    color: '#D8E4FF',
    fontSize: 16,
    fontWeight: '500',
  },
  actions: {
    gap: 14,
  },
  loginButton: {
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1764D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: '#B8CBF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#E8F0FF',
    fontSize: 18,
    fontWeight: '600',
  },
});
