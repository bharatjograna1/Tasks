/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import EventList from './EventList';
import { StackNavigator } from 'react-navigation';

export default StackNavigator ({
  List: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
});
