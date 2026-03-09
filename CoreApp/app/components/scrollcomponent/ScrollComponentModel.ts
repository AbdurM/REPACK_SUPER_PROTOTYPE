// generated from template

import { ScrollView } from "react-native";

interface ScrollComponentViewModel {
  isCloseToBottom : isCloseBottomSheetModel;
}

interface isCloseBottomSheetModel {
  layoutMeasurement: any;
  contentOffset: any;
  contentSize: any;
}

interface ScrollComponentViewProps {
  keyValue: string;
  testID: string;
  loading?: boolean;
  horizontal?: boolean;
  lazyLoad?: () => void;
  onRefresh?: () => void;
  pagingEnabled?: boolean;
  isLazyLoading?: boolean;
  children: React.ReactNode;
  style?: Record<string, any>;
  ref?: React.RefObject<ScrollView> | null;
  scrollEventThrottle?: number | undefined;
  keyboardDismissMode?: "none" | "interactive" | "on-drag" | undefined;
}

// Default props
const defaultProps: ScrollComponentViewProps = {
  keyValue: "",
  testID: "",
  loading: false,
  horizontal: false,
  pagingEnabled: false,
  isLazyLoading: false,
  children: null,
  style: {},
  scrollEventThrottle: 16,
  keyboardDismissMode: "none",
};

export type { ScrollComponentViewProps, ScrollComponentViewModel, isCloseBottomSheetModel };
export { defaultProps };