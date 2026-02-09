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
const CORE_TRANSACTIONS = [
  {
    id: 'c1',
    type: 'Employer Contribution',
    amount: 1250.0,
    date: '2 Feb 2026',
    description: 'Monthly SG contribution',
  },
  {
    id: 'c2',
    type: 'Personal Contribution',
    amount: 500.0,
    date: '1 Feb 2026',
    description: 'Voluntary contribution',
  },
  {
    id: 'c3',
    type: 'Insurance Premium',
    amount: -45.5,
    date: '1 Feb 2026',
    description: 'Life & TPD cover',
  },
  {
    id: 'c4',
    type: 'Administration Fee',
    amount: -12.0,
    date: '31 Jan 2026',
    description: 'Monthly admin fee',
  },
];

const pluginScreens = {
  TransactionsPlugin: {
    name: 'Transactions',
    component: () => (
      <TransactionsList
        title="Transactions (from Core)"
        transactions={CORE_TRANSACTIONS}
      />
    ),
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
