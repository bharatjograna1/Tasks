/**
 * 
 * Sample React Native App
 *
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './Card';

export default class ProductMass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ProductMass Screen</Text>
        <Card/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
