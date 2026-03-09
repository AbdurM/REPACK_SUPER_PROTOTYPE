// generated from template

import React from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { ScrollComponentStyles } from "./ScrollComponentStyle";
import { ScrollComponentViewProps } from "./ScrollComponentModel";
import useScrollComponentViewModel from "./ScrollComponentViewModel";

export function ScrollComponentView({
  ref,
  key,
  style,
  testID,
  children,
  lazyLoad,
  onRefresh,
  loading = false,
  horizontal = false,
  keyboardDismissMode,
  scrollEventThrottle,
  isLazyLoading = false,
  pagingEnabled = false,
}: ScrollComponentViewProps): React.JSX.Element {
  const { isCloseToBottom } = useScrollComponentViewModel();
  console.log("isLazyLoading", isLazyLoading);

  return (
    <ScrollView
      key={key}
      testID={testID}
      bounces={false}
      ref={ref ?? null}
      horizontal={horizontal}
      nestedScrollEnabled={true}
      pagingEnabled={pagingEnabled}
      keyboardDismissMode={keyboardDismissMode}
      scrollEventThrottle={scrollEventThrottle ?? 500}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          if (!isLazyLoading) {
            lazyLoad && lazyLoad();
          }
        }
      }}
      refreshControl={
        onRefresh && (
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        )
      }
      style={[ScrollComponentStyles.container, style]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {!children ? (
        <View style={ScrollComponentStyles.loadercontainer}>
          {/*******  change color of loader according to app theme *******/}
          <ActivityIndicator size="large" color="#000000" /> 
        </View>
      ) : (
        children
      )}
      {isLazyLoading && (
        <View style={ScrollComponentStyles.lazyLoaderContainer}>
          {/******* change color of loader according to app theme *******/}
          <ActivityIndicator size="small" color="#000000" />
        </View>
      )}
    </ScrollView>
  );
}
