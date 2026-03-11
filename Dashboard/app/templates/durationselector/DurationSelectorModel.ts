// Generated from Fingent Boilerplate

import { StyleProp, ViewStyle } from 'react-native';

type DurationType = '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | '10Y';

const DurationList: DurationType[] = ['1M', '6M', '1Y', '3Y', '5Y'];

interface DurationSelectorViewModel {
  selectedDuration: DurationType;
  setSelectedDuration: React.Dispatch<React.SetStateAction<DurationType>>;
  handleDurationChange: (item: DurationType) => void;
}

interface DurationSelectorProps {
  keyValue?: string;
  durationList?: DurationType[];
  onDurationChange?: (duration: DurationType) => void;
  backgroundColor?: string;
  textColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  initialDuration?: DurationType;
}

const defaultProps: DurationSelectorProps = {
  keyValue: 'duration-selector',
  durationList: DurationList,
  initialDuration: '3M',
};

export type { DurationSelectorProps, DurationSelectorViewModel, DurationType };
export { defaultProps, DurationList };

