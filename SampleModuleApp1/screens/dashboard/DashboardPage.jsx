import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardPage = ({textToDisplay = "Placeholder"}) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.content}>
      <View>
        <View>
          
          <Text>{textToDisplay} Details page</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

export default DashboardPage;

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