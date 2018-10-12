/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import abc from "./images/swan.jpg";

export default class App extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Image style={{height:100, width:100}}
        source = {{
          uri:"https://us.123rf.com/450wm/tanyastock/tanyastock1609/tanyastock160901582/62841748-user-icon-human-person-symbol-avatar-login-sign-blue-circle-button-with-flat-web-icon-vector.jpg?ver=6"
        }}/>
        
        <Text style={styles.welcome}>Bharat Jograna</Text>

        <Image source={abc} style={{height:100, width:100}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#099fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
