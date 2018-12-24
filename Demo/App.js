/*
 * 
 * Sample React Native App
 * 
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './Login.js';
import Splash from './Splash.js'
// import { StackNavigator } from 'react-navigation';

// export default StackNavigator({
//   home: {
//     screen: Splash,
//   },
//   second: {
//     screen: Login,
//   },
// });

export default class App extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}



// (c)Bharat Jograna