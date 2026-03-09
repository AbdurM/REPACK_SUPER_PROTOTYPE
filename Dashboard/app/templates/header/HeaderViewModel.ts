// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
import { HeaderViewModel, HeaderProps } from "./HeaderModel";
import { NavStates } from "utilities/Constants";

export default function useHeaderViewModel(props: HeaderProps): HeaderViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  // const navigation = useNavigation();
  
  useEffect(() => {
    // component Initialization
  }, []);

  const handleProfilePress = () => {
    
    // Navigate to ProfileScreenView within the MoreTabStack
    // (navigation as any).navigate(NavStates.stackNames.moreTabStack, {
    //   screen: NavStates.screenNames.profileScreenView,
    // });
    
    // Call the onProfilePress prop if provided
    if (props.onProfilePress) {
      props.onProfilePress();
    }
  };

  const handleBackPress = () => {
    // Navigate back using navigation hook
    // if (navigation.canGoBack()) {
    //   navigation.goBack();
    // }
    
    // Call the onBackPress prop if provided
    if (props.onBackPress) {
      props.onBackPress();
    }
  };

  const handleQuestionIconPress = () => {
    // Call the onQuestionIconPress prop if provided
    if (props.onQuestionIconPress) {
      props.onQuestionIconPress();
    }
  };

  return { 
    handleProfilePress,
    handleBackPress,
    onProfilePress: handleProfilePress,
    onBackPress: handleBackPress,
    onQuestionIconPress: handleQuestionIconPress,
    tintColor: props.tintColor || 'transparent',
    loading,
    setLoading,
  };
}