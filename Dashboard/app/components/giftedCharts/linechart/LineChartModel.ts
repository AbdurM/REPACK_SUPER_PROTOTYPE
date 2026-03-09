// generated from template

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Fontsize, TypographyStyles } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

interface LineChartViewModelProps {}

interface LineChartViewModel {}

interface LineChartItem {
  value?: number;
  label?: string;
}

interface LineChartProps {
  containerStyle?: StyleProp<ViewStyle>;
  lineData1?: LineChartItem[];
  lineData2?: LineChartItem[];
  title1?: string;
  title2?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  LineDataColor1?: StyleProp<ViewStyle>;
  LineDataColor2?: StyleProp<ViewStyle>;
  height?: number;
  spacing?: number;
  color?: string;
  color2?: string;
  dataPointsColor?: string;
  dataPointsColor2?: string;
  yAxisTextStyle?: StyleProp<TextStyle>;
  xAxisLabelTextStyle?: StyleProp<TextStyle>;
  noOfSections?: number;
  maxValue?: number;
  yAxisOffset?: number;
  stepValue?: number;
  yAxisSuffix?: string;
  endSpacing?: number;
  initialSpacing?: number;
  verticalLinesColor?: string;
}

const defaultProps: LineChartProps = {
  containerStyle: {},
  lineData1: [],
  lineData2: [],
  title1: '',
  title2: '',
  titleTextStyle: {},
  LineDataColor1: { backgroundColor: Theme.Colors.secondary2 },
  LineDataColor2: { backgroundColor: Theme.Colors.neutral10 },
  color: Theme.Colors.secondary2,
  dataPointsColor: Theme.Colors.secondary2,
  dataPointsColor2: Theme.Colors.neutral10,
  color2: Theme.Colors.neutral10,
  yAxisTextStyle: [
    TypographyStyles.body_m_n2,
    { color: Theme.Colors.neutral10, fontSize: Fontsize.eleven },
  ],
  xAxisLabelTextStyle: [
    TypographyStyles.body_m_n2,
    { color: Theme.Colors.neutral10, fontSize: Fontsize.eleven },
  ],
  noOfSections: 2,
  // maxValue: 50,
  yAxisOffset: 0,
  // stepValue: 20,
  yAxisSuffix: '',
  // spacing: UI.responsiveWidth(10.5),
  endSpacing: UI.responsiveWidth(4),
  initialSpacing: UI.responsiveWidth(4),
  verticalLinesColor: Theme.Colors.secondary4,
};

export type { LineChartViewModelProps, LineChartProps, LineChartViewModel, LineChartItem };
export { defaultProps };
