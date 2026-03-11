/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreenWrapper from 'screens/dashboard/index';
import { useRef } from 'react';
import { ThemeProvider } from 'context/ThemeContext';
import { DashboardStackNavigator } from "utilities/Navigation";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useTheme } from 'context/ThemeContext';

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ThemeProvider>
          <BottomSheetModalProvider>
            
            <AppContent />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const bottomSheetRef = useRef(null);

  return (
    <View style={styles.contentContainer}>
      {/* <Text style={styles.text}>Login App</Text> */}
      
      <NavigationContainer>
        <DashboardScreenWrapper />
        {/* <DashboardStackNavigator /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
