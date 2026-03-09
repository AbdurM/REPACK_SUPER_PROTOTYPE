// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { ChartProps, defaultProps } from './ChartModel';
import { ChartStyles } from './ChartStyle';
import { LineChartView } from 'components/giftedCharts/linechart/LineChartView';
import { UI } from 'utilities/Helpers';
import { DurationSelectorView } from 'templates/durationselector/DurationSelectorView';
import { Theme } from 'utilities/TenantIndex';
import useChartViewModel from './ChartViewModel';
import { LoaderView } from 'components/loader/LoaderView';

export function ChartView(props: Readonly<ChartProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { filteredPensionData, handleDurationChange,  } =
    useChartViewModel(mergedProps);
  return (
    <View style={ChartStyles.container} key={mergedProps.keyValue}>
      {/* {filteredPensionData?.dataPointsBalance ? ( */}
      {mergedProps.lineData1 ? (
        <LineChartView
          title1={mergedProps.title1}
          title2={mergedProps.title2}
          // lineData1={filteredPensionData?.dataPointsBalance || []}
          // lineData2={filteredPensionData?.dataPointsContributions || []}
          lineData1={mergedProps.lineData1}
          lineData2={mergedProps.lineData2}
          yAxisSuffix={mergedProps.yAxisSuffix}
          verticalLinesColor={Theme.Colors.secondary2}
          initialSpacing={UI.responsiveWidth(6.5)}
          height={UI.responsiveWidth(30)}
          // spacing={50}
          spacing={
            UI.responsiveWidth(80) /
            (mergedProps.lineData1?.length || 1)
            // (filteredPensionData?.dataPointsBalance?.length || 1)
          }
        />
      ) : (
        <View style={ChartStyles.durationSelectorContainer}>
          <LoaderView
            keyValue={`${mergedProps.keyValue}-loader`}
            type="container"
            size="large"
          />
        </View>
      )}

      <DurationSelectorView
        keyValue={`${mergedProps.keyValue}-duration`}
        durationList={mergedProps.durationList}
        textColor={
          mergedProps.designBackground === 'white'
            ? Theme.Colors.neutral2
            : Theme.Colors.neutral10
        }
        onDurationChange={handleDurationChange}
      />
    </View>
  );
}
