import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { Suspense, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import { fetchRemoteConfig } from "./api/apiService";
import { AppConfig } from "./types/config.types.ts";
import { ravenBaseUrl } from "./api/clients/ravenClient"

function App() {
  const [loading, setLoading] = useState(true);

  const [config, setConfig] = useState<AppConfig | null>(null);

  const loadConfig = async () => {
    try {
      const data = await fetchRemoteConfig();
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Response is not an array or is empty");
      }
      if (ravenBaseUrl === "/mock") { // Temporary soltion to parse mock value.
        setConfig(data[0].value);
      } else {
        const parsedConfig: AppConfig = JSON.parse(data[0].value);
        setConfig(parsedConfig);
      }
    } catch (error: any) {
      console.log("Failed to parse JSON from Raven.", error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  const AppContent = () => {
    return (
      <View style={styles.container}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <NavigationContainer>
            {!loading && (<BottomTabNavigator config={config}/>)} 
          </NavigationContainer>
        </Suspense>
      </View>
    );
  }
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
