// generated from template

import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';
import { DurationType, DurationList } from 'templates/durationselector/DurationSelectorModel';

interface BarChartViewModelProps {}

interface BarChartViewModel {
  selectedDuration: DurationType;
  setSelectedDuration: React.Dispatch<React.SetStateAction<DurationType>>;
  onDurationChange: (duration: DurationType) => void;
  barChartData: BarChartItem[];
}

interface BarChartItem {
  value: number;
  label?: string;
  spacing?: number;
  labelWidth?: number;
  frontColor?: string;
}

interface BarChartProps {
  keyValue?: string;
  barData: BarChartItem[];
  containerStyle?: StyleProp<ViewStyle>;
  barDataColor1?: StyleProp<ViewStyle>;
  barDataColor2?: StyleProp<ViewStyle>;
  title1?: string;
  title2?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  barWidth?: number;
  spacing?: number;
  noOfSections?: number;
  maxValue?: number;
  yAxisTextStyle?: StyleProp<TextStyle>;
  xAxisLabelTextStyle?: StyleProp<TextStyle>;
  yAxisTextColor?: string;
  xAxisLabelTextColor?: string;
  roundedBottom?: boolean;
  roundedTop?: boolean;
  rulesType?: string;
  rulesThickness?: number;
  width?: number;
  formatYLabel?: (value: string) => string;
  rulesColor?: string;
  showDurationSelector?: boolean;
  durationList?: DurationType[];
  onDurationChange?: (duration: DurationType) => void;
  durationSelectorBackgroundColor?: string;
  durationTextColor?: string;
  height?: number;
  initialSpacing?: number;
  endSpacing?: number;
  yAxisOffset?: number;
  stepValue?: number;
  barChartData?: BarChartItem[];
  initialDuration?: DurationType;
}
const defaultProps: BarChartProps = {
  keyValue: 'bar-chart',
  barData: [],
  containerStyle: {},
  barDataColor1: { backgroundColor: Theme.Colors.secondary2 },
  barDataColor2: { backgroundColor: Theme.Colors.secondary1 },
  title1: '',
  title2: '',
  titleTextStyle: {},
  barWidth: 8,
  spacing: 28,
  noOfSections: 2,
  maxValue: 10,
  yAxisTextStyle: {},
  xAxisLabelTextStyle: {},
  yAxisTextColor: Theme.Colors.neutral1,
  xAxisLabelTextColor: Theme.Colors.neutral1,
  roundedBottom: true,
  roundedTop: true,
  rulesType: 'dashed',
  rulesThickness: 1.5,
  width: UI.responsiveWidth(68),
  formatYLabel: (value: string) => `${value}%`,
  rulesColor: Theme.Colors.neutral7,
  showDurationSelector: false,
  durationList: DurationList,
  durationSelectorBackgroundColor: Theme.Colors.activeState,
  durationTextColor: Theme.Colors.neutral10,
  height: 110,
  initialSpacing: 20,
  endSpacing: 10,
};

export type { BarChartViewModelProps, BarChartProps, BarChartViewModel, BarChartItem };
export { defaultProps };
