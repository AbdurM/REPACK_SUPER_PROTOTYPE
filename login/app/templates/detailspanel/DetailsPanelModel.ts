// generated from template

import { ViewStyle } from "react-native";

interface DetailsPanelViewModelProps {
  title:string;
  keyValue?: string;
  style?: ViewStyle;
}

interface DetailsPanelViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DetailsPanelViewProps {
  readonly id:string;
  readonly leftIcon:string;
  readonly rightIcon:string;
  readonly title?:string;
  readonly description:string;
  readonly style:ViewStyle;
  readonly onClick: (data:string) => void;
  readonly onRightIconClick?: (data:string) => void;
  readonly panelDisabled:boolean;
  readonly titleColor?: string;
  readonly descriptionColor?: string;
  readonly leftIconTintColor?: string;
  readonly rightIconTintColor?: string;
  readonly customTouchableColor?: string;
  readonly customTouchableOptions?: {id:string; value:string}[] | null;
  readonly onClickCustomTouch?: (id:string) => void;
  readonly testId?: string;
  readonly rightBadgeText?: string;
  readonly rightBadgeColor?: string;
  readonly rightBadgeBackgroundColor?: string;
}

// Default props
const defaultProps: DetailsPanelViewModelProps = {
  keyValue: "",
  title: "",
};

export type { DetailsPanelViewModelProps, DetailsPanelViewProps, DetailsPanelViewModel };
export { defaultProps };
