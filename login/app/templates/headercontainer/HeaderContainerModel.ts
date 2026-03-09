// Generated from Fingent Boilerplate

import React from "react";
import { ViewStyle } from "react-native";
import { Theme } from "utilities/TenantIndex";
import { ListItem } from "components/selectoption/SelectOptionModel";

interface HeaderContainerViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderContainerProps {
  keyValue?: string;
  title: string;
  titleColor?: string;
  subTitle?: string;
  subTitleColor?: string;
  policySelectColor?: string;
  policySelectBorderColor?: string;
  showPolicySelect?: boolean;
  policySelectPlaceholder?: string;
  policySelectBottomSheetTitle?: string;
  policySelectList?: ListItem[];
  style?: ViewStyle;
  // Icon buttons props
  showFilterButton?: boolean;
  showCalendarButton?: boolean;
  showSearchButton?: boolean;
  // Callback props for list item selection
  onFilterBottomSheetButtonPress?: () => void;
  onCalendarBottomSheetButtonPress?: () => void;
  onSearchBottomSheetButtonPress?: () => void;
}

// Default props
const defaultProps: HeaderContainerProps = {
  keyValue: "header-container",
  title: "",
  titleColor: Theme.Colors.neutral5,
  subTitleColor: Theme.Colors.neutral5,
  policySelectColor: Theme.Colors.neutral2,
  policySelectBorderColor: Theme.Colors.neutral7,
  showPolicySelect: true,
  policySelectPlaceholder: "Select an option",
  policySelectBottomSheetTitle: "SELECT POLICY",
  showFilterButton: false,
  showCalendarButton: false,
  showSearchButton: false,
};

export type { HeaderContainerProps, HeaderContainerViewModel };
export { defaultProps };
