import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../config/config';
import { RootState } from '../store/store';
import { addTransaction } from '../store/transactionsSlice';
import Fab from '../components/Fab';
import { getNextPreset } from '../store/transactionPresets';

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

export default function BottomTabNavigator() {
  const enabledScreens = (config.plugins.bottomTabPlugins ?? []).map(
    key => pluginScreens[key],
  );

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
