// Generated from Fingent Boilerplate

import React from "react";
import { ImageStyle, ViewStyle } from "react-native";
import { IconKey } from 'utilities/Images';
import { UI } from "utilities/Helpers";

type ListItem = {
  id: string;
  name: string;
  planNumber?: string;
  status?: 'Active' | 'Pending' | 'Inactive';
  iconSource?: any;
  selected?: boolean;
};

interface SelectIconSheetViewModel {
  handleIconPress: () => void;
  handleBottomSheetButtonPress: () => void;
  tempSelectedItem: string;
  handleItemSelect: (item: ListItem) => void;
  bottomSheetRef: React.RefObject<any>;
}

interface SelectIconSheetProps {
  keyValue?: string;
  // Icon props
  iconSource: IconKey;
  iconStyle?: ImageStyle | ImageStyle[];
  iconWidth?: number;
  iconHeight?: number;
  iconTintColor?: string;
  touchableStyle?: ViewStyle | ViewStyle[];
  activeOpacity?: number;
  disabled?: boolean;
  
  // BottomSheet props
  bottomSheetTitle?: string;
  bodyComponent?: React.ReactElement;
  headerComponent?: React.ReactElement;
  footerComponent?: React.ReactElement;
  buttonText?: string;
  onBottomSheetButtonPress?: () => void;
  portalName?: string;
  showBottomSheetButton?: boolean;
  enablePanDownToClose?: boolean;
  backDrop?: boolean;
  
  // List selection props (similar to SelectOptionView)
  list?: ListItem[];
  selectedItem?: string;
  onItemSelect?: (item: ListItem) => void;
  onDone?: () => void;
  useListMode?: boolean; // New prop to enable list mode
  
  [key: string]: any;
}

// Mock data for list mode
const MockFilterData: ListItem[] = [
  {
    id: '1',
    name: 'Withdrawal',
    iconSource: 'AI_STAR',
  },
  {
    id: '2',
    name: 'Admin Fee',
    iconSource: 'AI_STAR',
  },
  {
    id: '3',
    name: 'Contribution',
    iconSource: 'AI_STAR',
    selected: true,
  },
  {
    id: '4',
    name: 'Single Contribution',
    iconSource: 'AI_STAR',
  },
  {
    id: '5',
    name: 'Updated Password',
    iconSource: 'AI_STAR',
  },
  {
    id: '6',
    name: 'Added Beneficiary',
    iconSource: 'AI_STAR',
  },
  {
    id: '7',
    name: 'Some other item',
    iconSource: 'AI_STAR',
  },
];

const MockCalendarData: ListItem[] = [
  {
    id: '1',
    name: 'This Week',
    iconSource: 'CALENDAR_CLOCK_LINE',
  },
  {
    id: '2',
    name: 'This Month',
    iconSource: 'CALENDAR_CLOCK_LINE',
  },
  {
    id: '3',
    name: 'Last Quarter',
    iconSource: 'CALENDAR_CLOCK_LINE',
  },
];

const MockSearchData: ListItem[] = [
  {
    id: '1',
    name: 'Recent Searches',
    iconSource: 'HISTORY',
  },
  {
    id: '2',
    name: 'Saved Searches',
    iconSource: 'SAVE_LINE',
  },
  {
    id: '3',
    name: 'Popular Searches',
    iconSource: 'GRAPH_LINE',
  },
];

// Default props
const defaultProps: SelectIconSheetProps = {
  keyValue: "SelectIconSheet",
  iconSource: "SETTINGS" as IconKey,
  iconWidth: UI.responsiveWidth(5),
  iconHeight: UI.responsiveWidth(5),
  activeOpacity: 0.7,
  disabled: false,
  bottomSheetTitle: "Options",
  buttonText: "Done",
  showBottomSheetButton: true,
  enablePanDownToClose: true,
  backDrop: true,
  list: [],
  useListMode: false,
};

export type { SelectIconSheetProps, SelectIconSheetViewModel, ListItem };
export { 
  defaultProps, 
  MockFilterData, 
  MockCalendarData, 
  MockSearchData 
};