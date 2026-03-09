// Generated from Fingent Boilerplate

import { PensionDataItem } from "modules/accounts/store/models/PensionSummaryModel";
import { LineChartItem } from "../giftedCharts/linechart/LineChartModel";

type DurationType = '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | '10Y';

const DurationList: DurationType[] = ['3M', '6M', '1Y', '3Y', '5Y'];

interface ChartViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDuration: DurationType;
  setSelectedDuration: React.Dispatch<React.SetStateAction<DurationType>>;
  pensionSummaryData: PensionDataItem[];
  handleDurationChange: (duration: DurationType) => void;
  filteredPensionData: PensionDataItem;
}

interface ChartProps {
  keyValue?: string;
  lineData1?: LineChartItem[];
  lineData2?: LineChartItem[];
  durationList?: DurationType[];
  designBackground?: 'white' | 'primary';
  yAxisSuffix?: string;
  verticalLinesColor?: string;
  title1?: string;
  title2?: string;
}

// Default props
const defaultProps: ChartProps = {
  keyValue: "Chart",
  lineData1: [],
  lineData2: [],
  durationList: DurationList,
  designBackground: 'primary',
};

export type { ChartProps, ChartViewModel, DurationType };
export { defaultProps, DurationList };