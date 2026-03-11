// Generated from Fingent Boilerplate

import { useState } from 'react';
import { DurationSelectorViewModel, DurationSelectorProps, DurationType } from './DurationSelectorModel';

export default function useDurationSelectorViewModel(props: DurationSelectorProps): DurationSelectorViewModel {
  const [selectedDuration, setSelectedDuration] = useState<DurationType>(props.initialDuration || '3M');

  const handleDurationChange = (item: DurationType) => {
    setSelectedDuration(item);
    if (props.onDurationChange) {
      props.onDurationChange(item);
    }
  };

  return {
    selectedDuration,
    setSelectedDuration,
    handleDurationChange,
  };
}

