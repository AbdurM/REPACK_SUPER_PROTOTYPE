// generated from template

import React from 'react';
import { View } from 'react-native';
import { LineChartStyles } from './LineChartStyle';
import { defaultProps, LineChartProps } from './LineChartModel';
import { LineChart, yAxisSides } from 'react-native-gifted-charts';
import { Theme } from 'utilities/TenantIndex';
import CustomTextView from '../../customtext/CustomTextView';

export function LineChartView(
  props: Readonly<LineChartProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <View style={[LineChartStyles.container, mergedProps.containerStyle]}>
      <View style={LineChartStyles.titleContainer}>
        <View style={LineChartStyles.titleItem}>
          <View
            style={[LineChartStyles.titleDot, mergedProps.LineDataColor1]}
          />
          <CustomTextView
            color={Theme.Colors.neutral10}
            variant="body_s_n1"
            style={[LineChartStyles.titleText, mergedProps.titleTextStyle]}
          >
            {mergedProps.title1}
          </CustomTextView>
        </View>
        <View style={LineChartStyles.titleItem}>
          <View
            style={[LineChartStyles.titleDot, mergedProps.LineDataColor2]}
          />
          <CustomTextView
            color={Theme.Colors.neutral10}
            variant="body_s_n1"
            style={[LineChartStyles.titleText, mergedProps.titleTextStyle]}
          >
            {mergedProps.title2}
          </CustomTextView>
        </View>
      </View>
      <LineChart
        data={mergedProps.lineData1}
        data2={mergedProps.lineData2}
        height={mergedProps.height}
        spacing={mergedProps.spacing}
        thickness={2}
        color={Theme.Colors.secondary2}
        dataPointsColor={Theme.Colors.secondary2}
        dataPointsColor2={Theme.Colors.neutral10}
        color2={Theme.Colors.neutral10}
        showVerticalLines
        hideRules
        yAxisColor="transparent"
        xAxisColor="transparent"
        yAxisTextStyle={[mergedProps.yAxisTextStyle,{ color: Theme.Colors.neutral10 }]}
        xAxisLabelTextStyle={[mergedProps.xAxisLabelTextStyle,{ color: Theme.Colors.neutral10 }]}
        isAnimated
        backgroundColor="transparent"
        yAxisSide={yAxisSides.RIGHT}
        formatYLabel={(value: string) =>
          `${value}${mergedProps.yAxisSuffix ?? ''}`
        }
        noOfSections={mergedProps.noOfSections}
        disableScroll
        maxValue={mergedProps.maxValue}
        yAxisOffset={mergedProps.yAxisOffset}
        stepValue={mergedProps.stepValue}
        endSpacing={mergedProps.endSpacing}
        initialSpacing={mergedProps.initialSpacing}
        verticalLinesColor={Theme.Colors.secondary2}
        verticalLinesThickness={0.2}
        yAxisLabelWidth={40}
      />
    </View>
  );
}
