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
        color={mergedProps.color}
        dataPointsColor={mergedProps.dataPointsColor}
        dataPointsColor2={mergedProps.dataPointsColor2}
        color2={mergedProps.color2}
        showVerticalLines
        hideRules
        yAxisColor="transparent"
        xAxisColor="transparent"
        yAxisTextStyle={mergedProps.yAxisTextStyle}
        xAxisLabelTextStyle={mergedProps.xAxisLabelTextStyle}
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
        verticalLinesColor={mergedProps.verticalLinesColor}
        verticalLinesThickness={0.2}
        yAxisLabelWidth={40}
      />
    </View>
  );
}
