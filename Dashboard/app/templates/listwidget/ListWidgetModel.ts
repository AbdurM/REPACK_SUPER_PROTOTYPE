// Generated from Fingent Boilerplate

import React from "react";
import { Strings } from "utilities/TenantIndex";

interface ListWidgetProps {
  keyValue?: string;
  title?: string;
  historyItems?: HistoryItemData[];
  onSeeAllPress?: () => void;
  showBottomSheet?: boolean;
  bottomSheetTitle?: string;
  bottomSheetContent?: React.ReactElement;
  [key: string]: any;
}

interface ListWidgetViewModel {
  bottomSheetRef: React.RefObject<any>;
}

interface HistoryItemData {
  id: string;
  type: string;
  date: string;
  amount: string;
  currency?: string;
}

// MANDATORY: Default props
const defaultProps: ListWidgetProps = {
  keyValue: "",
  title: Strings.accountsPage?.recentHistory || "Recent History",
  historyItems: [],
  onSeeAllPress: () => {},
  showBottomSheet: false,
  bottomSheetTitle: "Information",
  bottomSheetContent: undefined,
};

export type { ListWidgetProps, HistoryItemData, ListWidgetViewModel };
export { defaultProps };