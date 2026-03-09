import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  DashboardProps,
  defaultProps,
  MockBarChartData,
} from './DashboardModel';
import { DashboardStyles } from './DashboardStyle';
import useDashboardViewModel from './DashboardViewModel';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardTabStackNavigator } from '../../Navigation';

export default function DashboardView(
  props: Readonly<DashboardProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { 
    handleProfilePress,
    handleAccountPress,
    handleRefresh,
    loading,
    refreshHash,
    dashboardData,
  } = useDashboardViewModel(mergedProps);

  return (
    
    <View style={DashboardStyles.container}>
      {/* <NavigationContainer> */}
        {/* <DashboardTabStackNavigator /> */}
      {/* </NavigationContainer> */}
      <View style={DashboardStyles.lineChartContainer}>
        <Text>Dashboard Screen</Text>
         {/* <View style={{ height: UI.responsiveHeight(20)}} /> */}
        
      </View>

      <View style={DashboardStyles.contentContainer}>
        <Button title="Go to Next page" onPress={handleAccountPress} />
      </View>
    </View>
  );
}

