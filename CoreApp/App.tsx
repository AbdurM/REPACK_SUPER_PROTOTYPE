/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, Alert, Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import React, { Suspense } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/Navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const { setStatusBarColor, setStatusBarTheme } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
      <SafeAreaProvider>
          <BottomSheetModalProvider>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <AppContent />
          </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  
  return (
   
          <View style={styles.container}>
            
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
            
          </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
