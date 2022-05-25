import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CarItem from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  
  
});
