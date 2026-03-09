// generated from template

import React from 'react';
import { View } from 'react-native';
import { BarChart, yAxisSides } from 'react-native-gifted-charts';
import { Theme } from 'utilities/TenantIndex';
import { BarChartProps, defaultProps } from './BarChartModel';
import { BarChartStyles } from './BarChartStyle';
import CustomTextView from '../../customtext/CustomTextView';
import { DurationSelectorView } from 'templates/durationselector/DurationSelectorView';
import useBarChartViewModel from './BarChartViewModel';

export function BarChartView(
  props: Readonly<BarChartProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
const { barChartData, onDurationChange } = useBarChartViewModel(mergedProps);
  return (
    <View style={[BarChartStyles.container, mergedProps.containerStyle]}>
      {!!mergedProps.title1 && !!mergedProps.title2 && (
        <View style={BarChartStyles.titleContainer}>
          <View style={BarChartStyles.titleItem}>
            <View
              style={[BarChartStyles.titleDot, mergedProps.barDataColor1]}
            />
            <CustomTextView
              variant='body_s_n1'
              style={[mergedProps.titleTextStyle]}
              color={Theme.Colors.neutral1}
            >
              {mergedProps.title1}
            </CustomTextView>
          </View>
          <View style={BarChartStyles.titleItem}>
            <View
              style={[BarChartStyles.titleDot, mergedProps.barDataColor2]}
            />
            <CustomTextView
              style={[mergedProps.titleTextStyle]}
              variant='body_s_n1'
              color={Theme.Colors.neutral1}
            >
              {mergedProps.title2}
            </CustomTextView>
          </View>
        </View>
      )}

      <BarChart
        data={barChartData}
        barWidth={mergedProps.barWidth}
        spacing={210/barChartData.length || 10}
        roundedTop={mergedProps.roundedTop}
        roundedBottom={mergedProps.roundedBottom}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={[mergedProps.yAxisTextStyle, { color: mergedProps.yAxisTextColor }]}
        xAxisLabelTextStyle={[mergedProps.xAxisLabelTextStyle, { color: mergedProps.xAxisLabelTextColor }]}
        noOfSections={mergedProps.noOfSections}
        maxValue={mergedProps.maxValue}
        rulesType={mergedProps.rulesType}
        rulesColor={mergedProps.rulesColor}
        barBorderTopLeftRadius={7}
        barBorderTopRightRadius={7}
        barBorderBottomRightRadius={4}
        barBorderBottomLeftRadius={4}
        yAxisSide={yAxisSides.RIGHT}
        width={mergedProps.width}
        formatYLabel={mergedProps.formatYLabel}
        rulesThickness={mergedProps.rulesThickness}
        endSpacing={mergedProps.endSpacing}
        height={mergedProps.height}
        initialSpacing={mergedProps.initialSpacing}
        yAxisOffset={mergedProps.yAxisOffset}
        stepValue={mergedProps.stepValue}
        disableScroll={true}
        focusBarOnPress={false}
      />

      {mergedProps.showDurationSelector && (
        <DurationSelectorView
          keyValue={`${mergedProps.keyValue}-duration-selector`}
          durationList={mergedProps.durationList}
          onDurationChange={onDurationChange}
          backgroundColor={mergedProps.durationSelectorBackgroundColor}
          textColor={mergedProps.durationTextColor}
          initialDuration={mergedProps.initialDuration}
        />
      )}
    </View>
  );
}
