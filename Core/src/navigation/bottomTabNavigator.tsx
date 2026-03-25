import React from 'react';
import {  StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppConfig } from "../types/config.types.ts";
const Dashboard = React.lazy(() => import('DashboardPlugin/Dashboard'));
const Tab = createBottomTabNavigator();

interface Props {
  config: AppConfig;
}

export default function BottomTabNavigator({ config }: Props) {

  const DashboardScreen = () => {
    const graphImage = require('../../assets/graph.png')
    return <Dashboard dashboardPluginSettings={config.dashboardPluginSettings} graphImage={graphImage} />;
  };

  const pluginScreens = {
    DashboardPlugin: {
      name: 'Dashboard',
      component: DashboardScreen,
    },
  };
  
  const enabledScreens = (config.plugins.bottomTabPlugins ?? [])
    .filter(
      (key): key is keyof typeof pluginScreens =>
        key in pluginScreens,
    )
    .map(key => pluginScreens[key]);

    if (!enabledScreens.length) {
      return (
        <SafeAreaView style={styles.container}>
          <Text>No plugins enabled in config.</Text>
        </SafeAreaView>
      );
    }
    return (
      <Tab.Navigator>
        {enabledScreens.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ headerShown: false }}
          />
        ))}
      </Tab.Navigator>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  profileScreen: {
    flex: 1,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 20,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D7263D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
