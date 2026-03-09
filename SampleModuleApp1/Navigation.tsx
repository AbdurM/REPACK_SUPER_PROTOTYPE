import React, { JSX } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';

import DashboardView from './screens/dashboard/DashboardView';
import DashboardPage from './screens/dashboard/DashboardPage';

const DashboardTabStack =
  createNativeStackNavigator();

const DashboardTabStackNavigator = () => {
  return (
    <DashboardTabStack.Navigator>
      <DashboardTabStack.Screen name="DashboardView" component={DashboardView} />
      <DashboardTabStack.Screen name="DetailsView" component={DashboardPage} />
    </DashboardTabStack.Navigator>
  );
};

export default DashboardTabStackNavigator;
