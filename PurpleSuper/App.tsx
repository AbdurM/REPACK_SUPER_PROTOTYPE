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
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import React, { Suspense } from 'react';

const TransactionsList = React.lazy(
  () => import('TransactionsModule/TransactionsList'),
);

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
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <SafeAreaView style={styles.safeArea}>
          <TransactionsList />
        </SafeAreaView>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
