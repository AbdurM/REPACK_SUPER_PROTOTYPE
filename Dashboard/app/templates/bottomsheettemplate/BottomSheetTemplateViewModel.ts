// Generated from Fingent Boilerplate

import { BottomSheetTemplateViewModel, BottomSheetTemplateProps } from "./BottomSheetTemplateModel";

export default function useBottomSheetTemplateViewModel(props: BottomSheetTemplateProps): BottomSheetTemplateViewModel {
  const { onButtonPress } = props;
  
  // ONLY business logic functions and state management here
  
  const handleButtonPress = () => {
    if (onButtonPress) {
      onButtonPress();
    }
  };
  
  return { 
    handleButtonPress,
  };
}