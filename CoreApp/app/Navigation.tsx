import React, { JSX, Suspense, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import {
  AuthStackNavigatorProps,
  AuthStackParamList,
  AppStackNavigatorProps,
  AppStackParamList,
} from './utilities/UtilitiesModel';
import { NavStates } from './utilities/Constants';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { Images } from 'utilities/TenantIndex';
import { APP_IMAGES } from 'utilities/Images';
import { appConfig } from './config';

// Import dummy screens
import InvestmentsScreen from './screens/InvestmentsScreen';
import ContributionScreen from './screens/ContributionScreen';
import MoreScreen from './screens/MoreScreen';
import { CustomTabButtonProps } from 'utilities/UtilitiesModel';
import { BottomTabButtonView } from './components/bottomtabbutton/BottomTabButtonView';
// Lazy load components from remote modules via Module Federation
const LandingScreenView = React.lazy(
  () => import('LoginModule/LandingscreenView')
);

const DashboardView = React.lazy(
  () => import('DashboardModule/DashboardView')
);

// Prefetch DashboardModule by triggering the import early
const prefetchDashboardModule = () => {
  // Trigger the import to start downloading the module in the background
  import('DashboardModule/DashboardView')
    .then(() => {
      console.log('✅ DashboardModule prefetched successfully');
    })
    .catch((error) => {
      console.log('⚠️ Failed to prefetch DashboardModule:', error);
      // Non-critical error, module will load on-demand if prefetch fails
    });
};

// Wrapper components with Suspense for lazy-loaded remote components
const LandingScreenViewWrapper = (props: any) => {
  const navigation = useNavigation();

  // Prefetch DashboardModule when landing screen loads
  useEffect(() => {
    // prefetchDashboardModule();
  }, []);

  const handleTokenReceived = (token: string) => {
    console.log('Token received in CoreApp:', token);
    // Alert.alert('Token Received', `Token: ${token}`);
    // Navigate to MainTabs after receiving token
    navigation.navigate('MainTabs' as never);
  };

  return (
    <Suspense fallback={<Text>Loading Landing Screen...</Text>}>
      <LandingScreenView 
        {...props} 
        images={{...Images, ...APP_IMAGES}} 
        onTokenReceived={handleTokenReceived}
        config={appConfig.authPluginSettings}
      />
    </Suspense>
  );
};

const DashboardViewWrapper = (props: any) => (
  <Suspense fallback={(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size={"large"}/></View>)}>
    <DashboardView {...props} config={appConfig.dashboardPluginSettings} />
  </Suspense>
);

// Stack navigators
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const MainTab = createBottomTabNavigator();

// Main Tab Navigator with 4 tabs
function MainTabNavigator() {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarButton: props => CustomTabButton({route, ...props}),
      })}
    >
      <MainTab.Screen 
        name="Dashboard" 
        component={DashboardViewWrapper}
        options={{
          tabBarLabel: 'Dashboard',
        }}
      />
      <MainTab.Screen 
        name="Investments" 
        component={InvestmentsScreen}
        options={{
          tabBarLabel: 'Investments',
        }}
      />
      <MainTab.Screen 
        name="Contribution" 
        component={ContributionScreen}
        options={{
          tabBarLabel: 'Contribution',
        }}
      />
      <MainTab.Screen 
        name="More" 
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
        }}
      />
    </MainTab.Navigator>
  );
}

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
        component={LandingScreenViewWrapper}
      />
    </AuthStack.Navigator>
  );
}

function AppNavigator({
  initialRouteName = NavStates.screenNames.landingScreenView,
}: AppStackNavigatorProps) {
  return (
    <AppStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen
        name={NavStates.screenNames.landingScreenView}
        component={LandingScreenViewWrapper}
      />
      <AppStack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{
          animation: 'none', // Set animation for this specific screen
        }}
      />
    </AppStack.Navigator>
  );
}

function CustomTabButton({route, ...props}: CustomTabButtonProps): JSX.Element {
  return <BottomTabButtonView route={route} {...props} />;
}

export {
  AuthStackNavigator,
  AppNavigator,
};

export default AppNavigator;
