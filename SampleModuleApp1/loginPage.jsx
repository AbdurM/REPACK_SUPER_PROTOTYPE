import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { DashboardTabStackNavigator } from './Navigation';

const loginPage = ({textToDisplay = "Placeholder"}) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.content}>
      {/* <DashboardTabStackNavigator /> */}
      <View>
        <View>
          
          <Text>{textToDisplay}</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default loginPage;

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    // backgroundColor: '#f5f5f5',
    width: '100%',
    height: '45%',
    borderWidth: 2,
    borderColor: 'red',
    marginVertical: 50,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});