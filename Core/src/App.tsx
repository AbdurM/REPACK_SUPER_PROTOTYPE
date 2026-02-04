/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { Suspense } from 'react';
import { config } from './config/config';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TransactionsList = React.lazy(
  () => import('TransactionsPlugin/TransactionsList'),
);
const Profile = React.lazy(() => import('ProfilePlugin/Profile'));

const Tab = createBottomTabNavigator();
const pluginScreens = {
  TransactionsPlugin: {
    name: 'Transactions',
    component: TransactionsList,
  },
  ProfilePlugin: {
    name: 'Profile',
    component: Profile,
  },
};

function MyTabs() {
  const enabledScreens = (config.plugins ?? []).map(key => pluginScreens[key]);

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
        <Tab.Screen name={screen.name} component={screen.component} />
      ))}
    </Tab.Navigator>
  );
}
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
