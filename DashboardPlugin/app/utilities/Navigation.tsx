import React, { JSX } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import {
  DashboardTabStackParamList,
  DashboardTabStackNavigatorProps,
} from './UtilitiesModel';
import  {DashboardView}  from 'screens/dashboard/DashboardView';
import { NavStates } from './Constants';

const DashboardStack = createNativeStackNavigator<DashboardTabStackParamList>();
function DashboardStackNavigator({
  initialRouteName = NavStates.screenNames.dashboardView,
}: DashboardTabStackNavigatorProps) {
  return (
    <DashboardStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <DashboardStack.Screen
        name={NavStates.screenNames.dashboardView}
        component={DashboardView}
      />
    </DashboardStack.Navigator>
  );
}

export {
  DashboardStackNavigator,
};

export default DashboardStackNavigator;
