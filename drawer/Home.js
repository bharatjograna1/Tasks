import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Ionicons name="md-checkmark-circle-outline" size={32} color="green" />
        <Text>Open up App.js to start working on your app!</Text>
        <Ionicons name="md-checkmark-circle-outline" size={32} color="green" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
