import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Homescr from './Home.js';
import Icon from "react-native-vector-icons/MaterialIcons";
import Splashscr from './Splash.js';

const myapp = StackNavigator({

  homescr: {
    screen: Homescr,
    navigationOptions: (navigation) => ({
      title: 'Home',
      headerLeft: (
        <View style={{ paddingHorizontal: 10 }}>
          <Icon name="camera" size={40} color="blue" />
        </View>
      )
    }),
  },

})

export default DrawerNavigator({
  splashscr: {
    screen: Splashscr,
  },

  home: {
    screen: myapp,
  },

})

