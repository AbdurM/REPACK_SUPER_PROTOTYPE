// Generated from Fingent Boilerplate

import React from "react";

interface BottomSheetTemplateProps {
  keyValue?: string;
  title?: string;
  titleIcon?: React.ReactElement;
  headerComponent?: React.ReactElement;
  bodyComponent?: React.ReactElement;
  footerComponent?: React.ReactElement;
  buttonText?: string;
  onButtonPress?: () => void;
  bottomSheetRef?: React.RefObject<any>;
  portalName?: string;
  showButton?: boolean;
  enablePanDownToClose?: boolean;
  backDrop?: boolean;
  size?: 'small' | 'medium' | 'large' | 'dynamic' | string;
  scrollHeight?: number;
  [key: string]: any;
}

interface BottomSheetTemplateViewModel {
  handleButtonPress: () => void;
}

// MANDATORY: Default props (should be minimal/empty values)
const defaultProps: BottomSheetTemplateProps = {
  keyValue: "",
  title: "Select Option",
  buttonText: "Done",
  showButton: true,
  enablePanDownToClose: true,
  backDrop: true,
  portalName: "bottomsheet_template",
  size: "dynamic",
};

export type { BottomSheetTemplateProps, BottomSheetTemplateViewModel };
export { 
  defaultProps
};