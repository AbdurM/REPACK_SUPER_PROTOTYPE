// Generated from Fingent Boilerplate

import { useState, useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { AnimatedSearchBoxViewModel, AnimatedSearchBoxProps } from "./AnimatedSearchBoxModel";
import { UI } from "utilities/Helpers";

export default function useAnimatedSearchBoxViewModel(props: AnimatedSearchBoxProps): AnimatedSearchBoxViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  
  // Calculate full width (screen width minus horizontal margins)
  const screenWidth = Dimensions.get('window').width;
  const fullWidth = screenWidth - (UI.responsiveWidth(4) * 2); // Subtract left and right margins
  const iconWidth = UI.responsiveWidth(10); // Match the height for circular icon
  
  const searchWidthAnim = useRef(new Animated.Value(iconWidth)).current;

  useEffect(() => {
    // component Initialization
  }, []);

  const toggleSearch = () => {
    const toValue = isSearchExpanded ? iconWidth : fullWidth;
    
    Animated.timing(searchWidthAnim, {
      toValue,
      duration: props.animationDuration || 300,
      useNativeDriver: false,
    }).start();
    
    setIsSearchExpanded(!isSearchExpanded);
    
    // Clear search text when collapsing
    if (isSearchExpanded) {
      setSearchText("");
    }
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    // Call parent callback if provided
    if (props.onSearchTextChange) {
      props.onSearchTextChange(text);
    }
  };

  return { 
    loading, 
    setLoading,
    isSearchExpanded,
    searchText,
    searchWidthAnim,
    toggleSearch,
    handleSearchTextChange
  };
}
