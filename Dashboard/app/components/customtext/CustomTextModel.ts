// generated from template
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

interface CustomTextViewModel {

}

export type variantTypes = 'default' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' |
'h8' | 'n1' | 'n2' | 'body_l_n1'| 'body_l_n2'| 'body_l_n3' | 'body_m_n1'| 'body_m_n2'|
'body_m_n3' | 'body_s_n1'| 'body_s_n2'| 'body_s_n3' | 'largeBtn' | 'formHeader' | 'link' | 'status';

type ellipsSizeMode = 'head' | 'middle' | 'tail' | 'clip' | undefined;
type textBreak =  'simple' | 'highQuality' | 'balanced' | undefined;

interface CustomTextViewProps {
  keyValue?: string;
  children : ReactNode | string;
  variant? : variantTypes;
  style? : StyleProp<TextStyle>;
  lockFontScaling? : boolean;
  numberOfLines? : number;
  ellipsizeMode? : ellipsSizeMode;
  onPress?: () => void;
  textBreakStrategy? : textBreak;
  color? : string;
}

// Default props
const defaultProps: CustomTextViewProps = {
  keyValue: "",
  children: "",
  variant: 'default',
  lockFontScaling: true,
  color: "",
};

export type { CustomTextViewProps, CustomTextViewModel };
export { defaultProps };