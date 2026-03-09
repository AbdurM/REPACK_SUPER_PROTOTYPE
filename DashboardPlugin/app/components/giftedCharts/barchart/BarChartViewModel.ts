// generated from template

import { useState } from 'react';
import { BarChartViewModel, BarChartItem } from './BarChartModel';
import { DurationType } from '../../../templates/durationselector/DurationSelectorModel';
import { MockBarChartData, MockBarChartData6M, MockBarChartData3Y, MockBarChartData5Y, MockBarChartData1M } from '../../../../DashboardModel';
export default function useBarChartViewModel(): BarChartViewModel {
  const [selectedDuration, setSelectedDuration] = useState<DurationType>('1Y');
  const [barChartData, setBarChartData] = useState<BarChartItem[]>(MockBarChartData);

  const onDurationChange = (duration: DurationType) => {
    setSelectedDuration(duration);
    switch (duration) {
      case '1M':
        setBarChartData(MockBarChartData1M);
        break;
      case '6M':
        setBarChartData(MockBarChartData6M);
        break;
      case '1Y':
        setBarChartData(MockBarChartData);
        break;
      case '3Y':
        setBarChartData(MockBarChartData3Y);
        break;  
      case '5Y':
        setBarChartData(MockBarChartData5Y);
        break;
    }
  }
  return {
    selectedDuration,
    setSelectedDuration,
    onDurationChange,
    barChartData,
  };
}
