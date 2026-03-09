// Generated from Fingent Boilerplate

import { TextStyle } from 'react-native';

interface BottomSheetHeaderViewModelProps {
  loading?: boolean;
  heading: string;
  description:string;
}

interface BottomSheetHeaderViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BottomSheetHeaderViewProps {
  keyValue?: string;
  readonly title?: string;
  readonly titleStyle?: TextStyle;
  readonly titleColor?: string;
  readonly loading?: boolean;
  readonly heading?: string;
  readonly headingColor?: string;
  readonly description?:string;
  readonly descriptionColor?: string;
  readonly back?: boolean;
  readonly close?: boolean;
  readonly closeOnPress?: ()=>void;
  readonly backOnPress?: ()=>void;
  readonly headingTextStyle?: TextStyle;
  readonly descriptionTextStyle?: TextStyle;
  readonly titleEnable?: boolean;
  readonly showBottomBorder?: boolean;
  [key: string]: any;
}

const defaultProps: BottomSheetHeaderViewProps = {
  keyValue: "",
  title: "",
  titleColor: "",
  loading: false,
  heading: "",
  headingColor: "",
  description: "",
  descriptionColor: "",
  back: false,
  close: false,
  titleEnable: false,
  showBottomBorder: false,
};

export type { BottomSheetHeaderViewModelProps, BottomSheetHeaderViewProps, BottomSheetHeaderViewModel };
export { defaultProps };