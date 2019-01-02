/*
 * 
 * Sample React Native App
 *
 */

import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import Card from './card.js';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 9 }}>Today</Text>
        <FlatList
          data={
            [
              {
                name: 'Bharat',
                address1: 'Bhavnagar',
                address2: 'ahmedabad',
                time: '2h'
              },
              {
                name: 'karan',
                address1: 'Bhavnagar',
                address2: 'ahmedabad',
                time: '3h'
              },
              {
                name: 'parth',
                address1: 'Bhavnagar',
                address2: 'ahmedabad',
                time: '4h'
              }
            ]
          }
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={item => item.name}
        />
      </ScrollView>
    );
  }
}

