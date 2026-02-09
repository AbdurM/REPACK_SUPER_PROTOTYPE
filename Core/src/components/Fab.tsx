import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type FabProps = {
  onPress: () => void;
  label?: string;
  accessibilityLabel?: string;
};

export default function Fab({
  onPress,
  label = '+',
  accessibilityLabel = 'Floating action button',
}: FabProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.fabText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  fabPressed: {
    transform: [{ scale: 0.98 }],
  },
  fabText: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '700',
  },
});
