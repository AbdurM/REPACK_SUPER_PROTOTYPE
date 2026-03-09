// generated from template

import { ViewStyle } from "react-native";

interface WebViewViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WebViewViewProps {
  keyValue: string;
  html?: string;
  url?: string;
  style?: ViewStyle;
  onMessage?: (data: string) => void;
  minimumFontSize?: number;
  textZoom?: number;
  injectedJavaScript?: string;
}

// Default props
const defaultProps: WebViewViewProps = {
  keyValue: "",
  html: "",
  url: "",
  style: {},
  minimumFontSize: 16,
  textZoom: 100,
  injectedJavaScript: "",
};

export type { WebViewViewProps, WebViewViewModel };
export { defaultProps };