// Generated from Fingent Boilerplate

import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ProgressindicatorViewModel {
  loading: boolean;
  progressPercentage: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProgressindicatorProps {
  keyValue: string;
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  trackHeight?: number;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  showStartIndicator?: boolean;
  showProgressIndicator?: boolean;
  startIndicatorColor?: string;
  progressIndicatorColor?: string;
  startLabel?: string;
  progressLabel?: string;
  startLabelStyle?: StyleProp<TextStyle>;
  progressLabelStyle?: StyleProp<TextStyle>;
  startIndicatorStyle?: StyleProp<ViewStyle>;
  endIndicatorStyle?: StyleProp<ViewStyle>;
  trackStyle?: StyleProp<ViewStyle>;
  activeTrackStyle?: StyleProp<ViewStyle>;
  startLabelComponent?: React.ReactNode;
  endLabelComponent?: React.ReactNode;
  startLabelContainerStyle?: StyleProp<ViewStyle>;
  endLabelContainerStyle?: StyleProp<ViewStyle>;
}

// Default props
const defaultProps: ProgressindicatorProps = {
  keyValue: "",
  value: 0,
  minimumValue: 0,
  maximumValue: 100,
  trackHeight: 4,
  activeTrackColor: '#007AFF',
  inactiveTrackColor: '#E5E5EA',
  showStartIndicator: true,
  showProgressIndicator: true,
  startIndicatorColor: '#007AFF',
  progressIndicatorColor: '#007AFF',
  startLabel: 'Start',
  progressLabel: '',
};

export type { ProgressindicatorProps, ProgressindicatorViewModel };
export { defaultProps };