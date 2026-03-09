// Generated from Fingent Boilerplate

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { IconKey } from "utilities/Images";

interface OptionsListViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OptionsListProps {
  keyValue?: string;
  extraText?: string;
  optionTitle?: string;
  bottomSheetRef?: React.RefObject<BottomSheetModal | null>;
  optionDescription?: string;
  list?: any[];
  hasLeftIcon?: IconKey;
  onFilterPress?: (item: any) => void;
  activeFilter?: { value: string | number };
  defaultSelectOption?: { value: string | number };
  onClosePress?: () => void;
}

// Default props
const defaultProps: OptionsListProps = {
  keyValue: "OptionsList",
  extraText: "",
  optionTitle: "",
  bottomSheetRef: undefined,
  optionDescription: "",
  list: [],
  hasLeftIcon: "CALENDAR_1",
  onFilterPress: () => {},
};

export type { OptionsListProps, OptionsListViewModel };
export { defaultProps };