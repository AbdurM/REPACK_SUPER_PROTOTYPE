// Generated from Fingent Boilerplate

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ComposedGesture, GestureType } from 'react-native-gesture-handler';
import { SharedValue, AnimatedStyle } from 'react-native-reanimated';
import { Theme } from 'utilities/TenantIndex';

interface SliderViewModel {
  value: number;
  loading: boolean;
  gesture: ComposedGesture | GestureType;
  percentage: number;
  isDragging: boolean;
  thumbPosition: number;
  currentValue: SharedValue<number>;
  animatedPercentage: SharedValue<number>;
  animatedTrackStyle: AnimatedStyle<ViewStyle>;
  animatedThumbStyle: AnimatedStyle<ViewStyle>;
  animatedPercentageTextStyle: AnimatedStyle<ViewStyle>;
  onLayout: (event: any) => void;
  maxSlidingPositionPercentage: number;
  onValueChange: (value: number) => void;
  onSlidingComplete: (value: number) => void;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SliderProps {
  step?: number;
  value?: number;
  keyValue: string;
  thumbSize?: number;
  disabled?: boolean;
  editable?: boolean;
  thumbColor?: string;
  snapToStep?: boolean;
  thumbRadius?: number;
  trackHeight?: number;
  minimumValue?: number;
  maximumValue?: number;
  allowTapToSeek?: boolean;
  thumbBorderWidth?: number;
  thumbBorderColor?: string;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
  maxSlidingLabelOffset?: number;
  showThumbWhenDisabled?: boolean;
  maximumSlidingPosition?: number;
  trackStyle?: StyleProp<ViewStyle>;
  showMaxSlidingIndicator?: boolean;
  showPercentage?: boolean;
  onValueChange?: (value: number) => void;
  activeTrackStyle?: StyleProp<ViewStyle>;
  maxSlidingLabelPosition?: 'top' | 'bottom';
  onSlidingComplete?: (value: number) => void;
  maxSlidingLabelStyle?: StyleProp<TextStyle>;
  maxSlidingIndicatorStyle?: StyleProp<ViewStyle>;
  percentageStyle?: StyleProp<TextStyle>;
  [key: string]: any;
}

// Default props
const defaultProps: SliderProps = {
  step: 1,
  value: 0,
  keyValue: '',
  thumbSize: 20,
  trackHeight: 4,
  editable: true,
  thumbRadius: 30,
  minimumValue: 0,
  disabled: false,
  snapToStep: false,
  maximumValue: 100,
  thumbBorderWidth: 2,
  allowTapToSeek: false,
  thumbColor: Theme.Colors.neutral10,
  onValueChange: () => {},
  maxSlidingLabelOffset: 0,
  showThumbWhenDisabled: true,
  maximumSlidingPosition: 100,
  thumbBorderColor: Theme.Colors.primary1,
  onSlidingComplete: () => {},
  activeTrackColor: Theme.Colors.primary1,
  maxSlidingIndicatorStyle: {},
  inactiveTrackColor: Theme.Colors.neutral9,
  showMaxSlidingIndicator: true,
  showPercentage: false,
  maxSlidingLabelPosition: 'bottom',
  percentageStyle: {},
};

export type { SliderProps, SliderViewModel };
export { defaultProps };
