// Generated from Fingent Boilerplate

import { useCallback, useMemo, useState } from 'react';
import {
  AnimatedHeaderViewModel,
  AnimatedHeaderProps,
  defaultProps,
} from './AnimatedHeaderModel';
import {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { UtilitiesFunctions } from 'utilities/Helpers';

export default function useAnimatedHeaderViewModel(
  props: AnimatedHeaderProps,
): AnimatedHeaderViewModel {
  const mergedProps = useMemo(
    () => ({
      ...props,
      isStatic: props.hideHeaderOnScroll ? true : props.isStatic,
    }),
    [props],
  );

  const { headerHeight, isStatic, hideHeaderOnScroll, enablePullToRefresh, onRefresh } = mergedProps;

  const translateY = useSharedValue(0);
  const lastOffset = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const [measuredHeight, setMeasuredHeight] = useState<number>(
    headerHeight ?? defaultProps.headerHeight ?? 0,
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleLayout = useCallback(
    (e: any) => {
      const h = e.nativeEvent.layout.height;
      setMeasuredHeight(h);
    },
    [setMeasuredHeight],
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
      if (isStatic) return;

      const currentOffset = event.contentOffset.y;
      const diff = currentOffset - lastOffset.value;

      if (currentOffset <= 0) {
        translateY.value = withTiming(0);
        lastOffset.value = currentOffset;
        return;
      }

      translateY.value = Math.max(
        -measuredHeight,
        Math.min(0, translateY.value - diff),
      );
      lastOffset.value = currentOffset;
    },
    onEndDrag: () => {
      if (isStatic) return;

      if (lastOffset.value <= 0) {
        translateY.value = withTiming(0, { duration: 300 });
        return;
      }
      if (translateY.value < -measuredHeight / 2) {
        translateY.value = withTiming(-measuredHeight, { duration: 300 });
      } else {
        translateY.value = withTiming(0, { duration: 300 });
      }
    },
    onMomentumEnd: () => {
      if (isStatic) return;

      if (lastOffset.value <= 0) {
        translateY.value = withTiming(0, { duration: 300 });
        return;
      }
      if (translateY.value < -measuredHeight / 2) {
        translateY.value = withTiming(-measuredHeight, { duration: 300 });
      } else {
        translateY.value = withTiming(0, { duration: 300 });
      }
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity:
        isStatic && hideHeaderOnScroll && scrollY.value <= 0
          ? withTiming(0)
          : withTiming(1),
    };
  });

  const contentContainerStyle = useAnimatedStyle(() => {
    const style: any = {};
    if (!(isStatic && hideHeaderOnScroll)) {
      style.paddingTop = measuredHeight + translateY.value;
    }

    return style;
  });

  const handleRefresh = useCallback(() => {
    if (enablePullToRefresh && onRefresh) {
      setRefreshing(true);
      // Generate new UUID for each refresh event
      const refreshHash = UtilitiesFunctions.generateUUID();
      onRefresh(refreshHash);
      // Auto-hide loader after 2 seconds
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  }, [enablePullToRefresh, onRefresh]);

  return {
    measuredHeight,
    contentContainerStyle,
    scrollHandler,
    headerStyle,
    setMeasuredHeight,
    handleLayout,
    refreshing,
    handleRefresh,
  };
}
