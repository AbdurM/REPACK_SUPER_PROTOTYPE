import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../config/config';
import { RootState } from '../store/store';
import { addTransaction } from '../store/transactionsSlice';
import Fab from '../components/Fab';
import { getNextPreset } from '../store/transactionPresets';
import { addAuthenticationStatus } from '../store/authSlice';
import Prelanding from '../screens/Prelanding';

const TransactionsList = React.lazy(
  () => import('TransactionsPlugin/TransactionsList'),
);

const Profile = React.lazy(() => import('ProfilePlugin/Profile'));
const Login = React.lazy(() => import('AuthPlugin/Login'));

const Tab = createBottomTabNavigator();

const TransactionsScreen = () => {
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
};

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );
  return (
    <View style={styles.profileScreen}>
      <Profile isAuthenticated={isAuthenticated} />
      <Pressable
        style={styles.logoutButton}
        onPress={() => dispatch(addAuthenticationStatus(false))}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const pluginScreens = {
  TransactionsPlugin: {
    name: 'Transactions',
    component: TransactionsScreen,
  },
  ProfilePlugin: {
    name: 'Profile',
    component: ProfileScreen,
  },
};

export default function BottomTabNavigator() {
  const dispatch = useDispatch();
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );
  const enabledScreens = (config.plugins.bottomTabPlugins ?? [])
    .filter(
      (key): key is keyof typeof pluginScreens =>
        key in pluginScreens,
    )
    .map(key => pluginScreens[key]);

  const getAuthenticated = async () => {
    const authPlugin = await import('AuthPlugin/Auth');
    const authenticationStatus = authPlugin.Auth.authenticate();
    dispatch(addAuthenticationStatus(authenticationStatus));
  };

  useEffect(() => {
    getAuthenticated();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setShowLoginScreen(false);
    }
  }, [isAuthenticated]);

  if (!enabledScreens.length) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No plugins enabled in config.</Text>
      </SafeAreaView>
    );
  }

  if (!isAuthenticated) {
    if (!showLoginScreen) {
      return (
        <View style={styles.screen}>
          <Prelanding onLoginPress={() => setShowLoginScreen(true)} />
        </View>
      );
    }

    const authPluginConfig = config.authPluginSettings.content
    return (
      <View style={styles.screen}>
        <Login
          memberLabel={authPluginConfig.usernameLabel}
          passwordLabel={authPluginConfig.passwordLabel}
          setAuthenticationStatus={(value: boolean) => {
            dispatch(addAuthenticationStatus(value));
          }}
          isRegisterButtonVisible={config.authPluginSettings.isRegisterButtonVisible}
        />
      </View>
    );
  }

  return (
    <Tab.Navigator>
      {enabledScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
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
