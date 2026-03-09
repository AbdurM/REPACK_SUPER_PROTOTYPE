// generated from template

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme } from 'utilities/TenantIndex';

interface PieChartViewModelProps {}

interface PieChartViewModel {}

interface PieChartDataItem {
  value: number;
  color?: string;
}

interface PieChartProps {
  pieData: PieChartDataItem[];
  innerRadius?: number;
  radius?: number;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  value?: string | number;
  valueStyle?: StyleProp<TextStyle>;
  centerTextContainer?: StyleProp<ViewStyle>;
  strokeWidth?: number;
  innerCircleColor?: string;
  style?: StyleProp<ViewStyle>;
}

const defaultProps: PieChartProps = {
  pieData: [],
  innerRadius: 68,
  radius: 85,
  titleStyle: {},
  title: '',
  value: '',
  valueStyle: {},
  centerTextContainer: {},
  strokeWidth: 9,
  innerCircleColor: Theme.Colors.background2,
};

export type { PieChartViewModelProps, PieChartProps, PieChartViewModel };
export { defaultProps };
