// Generated from Fingent Boilerplate

import { IconKey } from 'utilities/Images';

interface ListItemProps {
  keyValue?: string;
  type?: string;
  date?: string;
  amount?: string;
  currency?: string;
  onPress?: () => void;
  onRightIconPress?: () => void;
  itemData?: ListItemData;
  leftIcon?: IconKey;
  rightIcon?: IconKey | null;
  [key: string]: any;
}

interface ListItemViewModel {
  displayData: ListItemData;
  handlePress: () => void;
}

interface ListItemData {
  id: string;
  type: string;
  date: string;
  amount: string;
  currency?: string;
}

// MANDATORY: Default props
const defaultProps: ListItemProps = {
  keyValue: "",
  disabled: true,
  type: "",
  date: "",
  amount: "",
  currency: "AED",
  leftIcon: "DOCUMENT_STACK",
  rightIcon: null,
  onPress: () => {},
  onRightIconPress: () => {},
};

export type { ListItemProps, ListItemViewModel, ListItemData };
export { defaultProps };