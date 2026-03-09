import React, { JSX } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import {
  AuthStackNavigatorProps,
  AuthStackParamList,
} from './UtilitiesModel';
import  {LandingscreenView}  from 'screens/landingscreen/LandingscreenView';
import { NavStates } from './Constants';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
function AuthStackNavigator({
  initialRouteName = NavStates.screenNames.landingScreenView,
}: AuthStackNavigatorProps) {
  return (
    <AuthStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen
        name={NavStates.screenNames.landingScreenView}
        component={LandingscreenView}
      />
    </AuthStack.Navigator>
  );
}

export {
  AuthStackNavigator,
};

export default AuthStackNavigator;
