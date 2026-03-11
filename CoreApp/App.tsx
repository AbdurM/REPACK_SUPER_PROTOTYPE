/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, Alert, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/Navigation';
// import { appConfig as appConfig2 } from './app/config';

// TEMPORARY FOR PURPOSE OF DEMO
import { AppConfig } from './app/utilities/UtilitiesModel';
import { loadRemoteConfig } from './app/services/configService';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const { setStatusBarColor, setStatusBarTheme } = useTheme();

  // TEMPORARY FOR PURPOSE OF DEMO
  const [loading, setLoading] = useState<boolean>(true);
  const [appConfig, setAppConfig] = useState<AppConfig>();

  useEffect(() => {
    const loadAppConfig = async () => {
      try {
        const config = await loadRemoteConfig();
        console.log("CONFIG-----");
        console.log(config);
        setAppConfig(config);
      } finally {
        setLoading(false);
      }
    };

    loadAppConfig();
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
      <SafeAreaProvider>
          <BottomSheetModalProvider>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <View style={styles.container}>
                <NavigationContainer>
                  {!loading && (
                    <AppNavigator appConfig={appConfig}/>
                  )}
                </NavigationContainer>
              </View>
          </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
