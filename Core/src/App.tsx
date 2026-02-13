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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import { addAuthenticationStatus } from './store/authSlice';

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
          <BottomTabNavigator />
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
