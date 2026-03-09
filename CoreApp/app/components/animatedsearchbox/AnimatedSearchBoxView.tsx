// Generated from Fingent Boilerplate

import React from "react";
import { View, Animated, TextInput, TouchableOpacity } from "react-native";
import { AnimatedSearchBoxProps, defaultProps } from "./AnimatedSearchBoxModel";
import { AnimatedSearchBoxStyles } from "./AnimatedSearchBoxStyle";
import useAnimatedSearchBoxViewModel from "./AnimatedSearchBoxViewModel";
import { IconView } from "components/icon/IconView";
import { Theme } from "utilities/TenantIndex";
import { UI } from "utilities/Helpers";

export function AnimatedSearchBoxView(props: Readonly<AnimatedSearchBoxProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { 
    loading, 
    setLoading,
    isSearchExpanded,
    searchText,
    searchWidthAnim,
    toggleSearch,
    handleSearchTextChange
  } = useAnimatedSearchBoxViewModel(mergedProps);

  return (
    <View style={[AnimatedSearchBoxStyles.container, mergedProps.containerStyle]}>
      <Animated.View style={[
        AnimatedSearchBoxStyles.searchBox,
        mergedProps.searchBoxStyle,
        { width: searchWidthAnim }
      ]}>
        {isSearchExpanded && (
          <TextInput
            style={[AnimatedSearchBoxStyles.searchInput, mergedProps.textInputStyle]}
            placeholder={mergedProps.placeholder}
            placeholderTextColor={Theme.Colors.neutral6}
            value={searchText}
            onChangeText={handleSearchTextChange}
            autoFocus={true}
          />
        )}
        <TouchableOpacity 
          style={AnimatedSearchBoxStyles.searchIconContainer}
          onPress={toggleSearch}
        >
          <IconView
            source="SEARCH"
            width={mergedProps.iconSize || UI.responsiveWidth(5)}
            height={mergedProps.iconSize || UI.responsiveWidth(5)}
            tintColor={mergedProps.iconTintColor || Theme.Colors.neutral4}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
