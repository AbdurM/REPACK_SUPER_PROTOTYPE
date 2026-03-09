// generated from template

import React, { useCallback } from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { defaultProps, PieChartProps } from './PieChartModel';
import { PieChartStyles } from './PieChartStyle';
import CustomTextView from '../../customtext/CustomTextView';
import { Theme } from '../../../utilities/TenantIndex';

const CenterLabelComponent = (props: { title: string; value: string; centerTextContainer?: any; titleStyle?: any; valueStyle?: any }) => (
  <View
    style={[
      PieChartStyles.textContainer,
      props.centerTextContainer,
      { backgroundColor: Theme.Colors.background2 },
    ]}
  >
    <CustomTextView
      style={[PieChartStyles.centertitle, props.titleStyle]}
      variant='body_m_n2'
      color={Theme.Colors.neutral1}
    >
      {props.title}
    </CustomTextView>
    <CustomTextView
      style={[PieChartStyles.centerValue, props.valueStyle]}
      variant='h1'
      color={Theme.Colors.neutral2}
    >
      {props.value}
    </CustomTextView>
  </View>
);

export function PieChartView(
  props: Readonly<PieChartProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  
  const renderCenterLabel = useCallback(() => (
    <CenterLabelComponent
      title={mergedProps.title ?? ''}
      value={mergedProps.value !== undefined && mergedProps.value !== null ? String(mergedProps.value) : ''}
      centerTextContainer={mergedProps.centerTextContainer}
      titleStyle={mergedProps.titleStyle}
      valueStyle={mergedProps.valueStyle}
    />
  ), [mergedProps.title, mergedProps.value, mergedProps.centerTextContainer, mergedProps.titleStyle, mergedProps.valueStyle]);
  
  return (
    <View style={[PieChartStyles.container, props.style]}>
      <PieChart
        innerRadius={mergedProps.innerRadius}
        radius={mergedProps.radius}
        data={mergedProps.pieData}
        strokeWidth={mergedProps.strokeWidth}
        strokeColor={Theme.Colors.background2}
        centerLabelComponent={renderCenterLabel}
        innerCircleColor={mergedProps.innerCircleColor}
      />
    </View>
  );
}
