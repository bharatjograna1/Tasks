/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';


export default class App extends Component {

  constructor(){
    super();
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(){
    Alert.alert("you taped button");
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={ this.handleclick } Color="#099fff">
        <Text style={styles.welcome}>Joshi Biz Tech</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={this.handleclick}>
        <Text fontSize="35">
          Click
        </Text>
      </TouchableHighlight>
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
    fontSize: 30,
    color:'#009',
    textAlign: 'center',
    margin: 10,
  },
});
