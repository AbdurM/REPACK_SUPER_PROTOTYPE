// Generated from Fingent Boilerplate

import React from 'react';
import { View, RefreshControl } from 'react-native';
import { AnimatedHeaderProps, defaultProps } from './AnimatedHeaderModel';
import { AnimatedHeaderStyles } from './AnimatedHeaderStyle';
import useAnimatedHeaderViewModel from './AnimatedHeaderViewModel';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import { Theme } from 'utilities/TenantIndex';

export function AnimatedHeaderView(
  props: Readonly<AnimatedHeaderProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {
    contentContainerStyle,
    scrollHandler,
    headerStyle,
    measuredHeight,
    handleLayout,
    refreshing,
    handleRefresh,
  } = useAnimatedHeaderViewModel(mergedProps);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          AnimatedHeaderStyles.outerContainer,
          mergedProps.outerContainerStyle,
          { backgroundColor: mergedProps.backgroundColor }
        ]}
        edges={['top']}
      >
        <View style={AnimatedHeaderStyles.innerConatiner}>
          <Animated.View
            onLayout={handleLayout}
            style={[
              AnimatedHeaderStyles.headerContainer,
              { minHeight: measuredHeight },
              headerStyle,
              mergedProps.headerContainerStyle,
              mergedProps.backgroundColor && { backgroundColor: mergedProps.backgroundColor }
            ]}
          >
            {mergedProps.headerContent}
          </Animated.View>

          <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            bounces={true}
            scrollsToTop={false}
            showsVerticalScrollIndicator={false}
            style={!!mergedProps.backgroundColor && { backgroundColor: mergedProps.backgroundColor }}
            refreshControl={
              mergedProps.enablePullToRefresh ? (
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                  tintColor={mergedProps.refreshLoaderTintColor}
                  colors={[mergedProps.refreshLoaderTintColor || Theme.Colors.neutral10]}
                  progressViewOffset={measuredHeight}
                />
              ) : undefined
            }
          >
            <Animated.View
              style={[
                AnimatedHeaderStyles.scrollContentView,
                contentContainerStyle,
              ]}
            >
              {mergedProps.children}
            </Animated.View>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
