// Generated from Fingent Boilerplate

import { ViewStyle } from 'react-native';

interface SvgGradientViewModelProps {
  loading?: boolean;
  name?: string;
  title?: string;
}

interface SvgGradientViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SvgGradientViewProps {
  keyValue?: string;
  readonly loading?: boolean;
  readonly name?: string;
  readonly title?: string;
  readonly children?: any;
  readonly borderRadius?: number;
  readonly borderWidth?: number;
  readonly borderColor?: string;
  readonly outerGradientColor?: string;
  readonly innerGradientColor?: string;
  readonly containerStyle?: ViewStyle | null;
  [key: string]: any;
}

const defaultProps: SvgGradientViewProps = {
  keyValue: "",
  loading: false,
  name: "",
  title: "",
  borderRadius: 0,
  borderWidth: 0,
  borderColor: "",
  outerGradientColor: "",
  innerGradientColor: "",
  containerStyle: null,
};

export type { SvgGradientViewModelProps, SvgGradientViewProps, SvgGradientViewModel };
export { defaultProps };
