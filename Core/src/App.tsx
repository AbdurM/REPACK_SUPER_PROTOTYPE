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
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { Suspense } from 'react';
import { config } from './config/config';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store/store';
import { addTransaction } from './store/transactionsSlice';
import Fab from './components/Fab';
import { getNextPreset } from './store/transactionPresets';

const TransactionsList = React.lazy(
  () => import('TransactionsPlugin/TransactionsList'),
);
const Profile = React.lazy(() => import('ProfilePlugin/Profile'));

const Tab = createBottomTabNavigator();
function TransactionsScreen() {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state: RootState) => state.transactions.items,
  );

  return (
    <View style={styles.screen}>
      <TransactionsList
        content={config.transactionsPluginSettings.content}
        transactions={transactions}
        isHeaderVisible={config.transactionsPluginSettings.isHeaderVisible}
      />
      <Fab
        onPress={() => {
          const now = new Date();
          const preset = getNextPreset();
          dispatch(
            addTransaction({
              id: `c-${now.getTime()}`,
              type: preset.type,
              amount: preset.amount,
              date: now.toLocaleDateString('en-AU', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }),
              description: 'Added from Core',
            }),
          );
          Alert.alert('Item added from Core');
        }}
        accessibilityLabel="Add transaction"
      />
    </View>
  );
}

const pluginScreens = {
  TransactionsPlugin: {
    name: 'Transactions',
    component: TransactionsScreen,
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
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
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
  screen: {
    flex: 1,
  },
});

export default App;
