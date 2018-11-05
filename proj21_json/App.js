/** Bharat Jograna
 * 
 * Json File create and read...
 * 
 * Heading with animation(changing color)
 * button with event
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text,
  View,
  FlatList } from 'react-native';

export default class App extends Component {

  render() {
    return (
        <View>

          <Text style={{fontSize:25,color:'blue',alignSelf:'center'}}>
            Technotrons
          </Text>

            <FlatList style={{alignSelf:'center'}}
              data={[
                { name: 'Bharat' },
                { name: 'Karan' },
                { name: 'Parth' }
              ]}
              
              renderItem={({item}) => <Text>{item.name}</Text>}             
               />
        </View>
    );
  }
}
