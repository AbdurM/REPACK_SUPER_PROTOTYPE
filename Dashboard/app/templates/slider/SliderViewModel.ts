// Generated from Fingent Boilerplate

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedReaction, useDerivedValue, runOnJS, useAnimatedStyle } from 'react-native-reanimated';
import { SliderViewModel, SliderProps, defaultProps } from './SliderModel';

export default function useSliderViewModel(
  props: SliderProps,
): SliderViewModel {
  const mergedProps = useMemo(() => ({ ...defaultProps, ...props }), [props]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<number>(props.value || 0);
  const [displayValue, setDisplayValue] = useState<number>(props.value || 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  
  // Use shared values for gesture handler
  const sliderWidth = useSharedValue<number>(0);
  const sliderX = useSharedValue<number>(0);
  const currentValue = useSharedValue<number>(props.value || 0);
  const gestureStartValue = useSharedValue<number>(props.value || 0);
  const isGestureActive = useSharedValue<boolean>(false);

  const {
    minimumValue = 0,
    maximumValue = 100,
    maximumSlidingPosition = 100,
    onValueChange = () => {},
    onSlidingComplete = () => {},
    disabled = false,
    editable = true,
    step = 1,
    snapToStep = false,
    allowTapToSeek = false,
  } = props;

  // Only sync from props, not from internal state to avoid loops
  useEffect(() => {
    const newValue = props.value || 0;
    setValue(newValue);
    setDisplayValue(newValue);
    currentValue.value = newValue;
  }, [props.value, currentValue]);

  // Sync shared value changes to React state using useAnimatedReaction
  // Only update state when gesture ends to avoid loops
  useAnimatedReaction(
    () => ({
      value: currentValue.value,
      isActive: isGestureActive.value,
    }),
    (current, previous) => {
      // Only sync state when gesture just ended (not active now, but was active before)
      if (!current.isActive && previous?.isActive && current.value !== previous?.value) {
        const val = current.value;
        runOnJS(setValue)(val);
      }
    },
    []
  );

  // Helper function for snapping - only applies if snapToStep is true (worklet)
  const snapValueToStep = useCallback(
    (val: number): number => {
      'worklet';
      if (!snapToStep || !step) return val;
      const steppedValue =
        Math.round((val - minimumValue) / step) * step + minimumValue;
      return Math.max(
        minimumValue,
        Math.min(maximumSlidingPosition, steppedValue),
      );
    },
    [snapToStep, step, minimumValue, maximumSlidingPosition],
  );

  // Helper function for tap-to-seek using pageX for consistent coordinates (worklet)
  const getValueFromTap = useCallback(
    (evt: any) => {
      'worklet';
      const pageX = evt.nativeEvent.pageX;
      const relativeX = pageX - sliderX.value;
      const percentage = Math.max(
        0,
        Math.min(1, relativeX / sliderWidth.value),
      );
      const newValue =
        minimumValue + percentage * (maximumValue - minimumValue);

      const limitedValue = Math.min(newValue, maximumSlidingPosition);
      const snappedValue = snapValueToStep(limitedValue);
      return Math.round(snappedValue * 100) / 100;
    },
    [minimumValue, maximumValue, maximumSlidingPosition, snapValueToStep, sliderX, sliderWidth],
  );

  const getValueFromGesture = useCallback(
    (translationX: number) => {
      'worklet';
      const startThumbPosition =
        ((gestureStartValue.value - minimumValue) / (maximumValue - minimumValue)) *
        sliderWidth.value;

      const newPosition = startThumbPosition + translationX;
      const percentage = Math.max(
        0,
        Math.min(1, newPosition / sliderWidth.value),
      );

      const newValue =
        minimumValue + percentage * (maximumValue - minimumValue);

      // Limit the value to maximumSlidingPosition
      const limitedValue = Math.min(newValue, maximumSlidingPosition);
      const snappedValue = snapValueToStep(limitedValue);
      return Math.round(snappedValue * 100) / 100; // Round to 2 decimal places
    },
    [
      minimumValue,
      maximumValue,
      maximumSlidingPosition,
      snapValueToStep,
      gestureStartValue,
      sliderWidth,
    ],
  );

  // Pan gesture for dragging the slider
  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled && editable)
        .minDistance(2)
        .onBegin(() => {
          isGestureActive.value = true;
          gestureStartValue.value = currentValue.value;
          runOnJS(setIsDragging)(true);
        })
        .onUpdate((event) => {
          if (disabled || !editable) return;
          const newValue = getValueFromGesture(event.translationX);
          currentValue.value = newValue;
          runOnJS(setDisplayValue)(newValue);
          runOnJS(onValueChange)(newValue);
        })
        .onEnd((event) => {
          if (disabled || !editable) return;
          const newValue = getValueFromGesture(event.translationX);
          currentValue.value = newValue;
          isGestureActive.value = false;
          runOnJS(setIsDragging)(false);
          runOnJS(onSlidingComplete)(newValue);
        })
        .onFinalize(() => {
          isGestureActive.value = false;
        }),
    [
      disabled,
      editable,
      getValueFromGesture,
      onValueChange,
      onSlidingComplete,
      gestureStartValue,
      currentValue,
      isGestureActive,
    ],
  );

  // Tap gesture for tap-to-seek functionality
  const tapGesture = useMemo(
    () =>
      Gesture.Tap()
        .enabled(allowTapToSeek && !disabled && editable)
        .onStart(() => {
          isGestureActive.value = true;
        })
        .onEnd((event) => {
          if (disabled || !editable) return;
          // Create a synthetic event object similar to the old PanResponder format
          const syntheticEvent = {
            nativeEvent: {
              pageX: event.absoluteX,
            },
          };
          const newValue = getValueFromTap(syntheticEvent);
          currentValue.value = newValue;
          isGestureActive.value = false;
          runOnJS(setDisplayValue)(newValue);
          runOnJS(onValueChange)(newValue);
          runOnJS(onSlidingComplete)(newValue);
        })
        .onFinalize(() => {
          isGestureActive.value = false;
        }),
    [
      allowTapToSeek,
      disabled,
      editable,
      getValueFromTap,
      onValueChange,
      onSlidingComplete,
      currentValue,
      isGestureActive,
    ],
  );

  // Compose gestures: tap takes priority, then pan
  const composedGesture = useMemo(
    () => Gesture.Race(tapGesture, panGesture),
    [tapGesture, panGesture],
  );

  const onLayout = useCallback((event: any) => {
    const { width, x } = event.nativeEvent.layout;
    sliderWidth.value = width;
    sliderX.value = x;
  }, [sliderWidth, sliderX]);

  // Use derived value for smooth percentage calculation on UI thread
  const animatedPercentage = useDerivedValue(() => {
    return ((currentValue.value - mergedProps.minimumValue!) /
      (mergedProps.maximumValue! - mergedProps.minimumValue!)) * 100;
  }, [mergedProps.minimumValue, mergedProps.maximumValue]);

  const percentage = useMemo(
    () => {
      const calc = ((displayValue - mergedProps.minimumValue!) /
        (mergedProps.maximumValue! - mergedProps.minimumValue!)) *
      100;
      return calc;
    },
    [displayValue, mergedProps.minimumValue, mergedProps.maximumValue],
  );

  const thumbPosition = useMemo(() => percentage, [percentage]); // Position as percentage

  const maxSlidingPositionPercentage = useMemo(
    () =>
      ((mergedProps.maximumSlidingPosition! - mergedProps.minimumValue!) /
        (mergedProps.maximumValue! - mergedProps.minimumValue!)) *
      100,
    [
      mergedProps.maximumSlidingPosition,
      mergedProps.minimumValue,
      mergedProps.maximumValue,
    ],
  );

  // Animated styles for smooth UI thread updates using derived value
  const animatedTrackStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      width: `${animatedPercentage.value}%`,
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      left: `${animatedPercentage.value}%`,
    };
  });

  const animatedPercentageTextStyle = useAnimatedStyle(() => {
    'worklet';
    const percentValue = animatedPercentage.value;
    
    // When percentage is > 82%, stick to right alignment
    if (percentValue > 82) {
      return {
        right: 0,
        left: 'auto',
        transform: [{ translateX: 0 }], // No transform when right-aligned
      };
    }
    
    // Otherwise, follow the thumb position
    return {
      left: `${percentValue}%`,
      right: 'auto',
      transform: [{ translateX: -20 }], // Center on thumb
    };
  });

  return {
    loading,
    setLoading,
    value,
    setValue,
    isDragging,
    setIsDragging,
    onValueChange,
    onSlidingComplete,
    gesture: composedGesture,
    currentValue,
    animatedPercentage,
    animatedTrackStyle,
    animatedThumbStyle,
    animatedPercentageTextStyle,
    onLayout,
    percentage,
    thumbPosition,
    maxSlidingPositionPercentage,
  };
}
