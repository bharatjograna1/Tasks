/** Bharat Jograna
 * 
 * Heading with animation(changing color)
 * button with alert dialog
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Alert, TextInput } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';

export default class App extends Component {

  constructor() {
    super();
    this.handleclick = this.handleclick.bind(this);

    // this code for animation...
    this.state = {}
    this.state.customestyle = {
      color: 'blue'
    }

    // here start the defination of customstyle-interval-function...
    setInterval(() => {
      if (this.state.customestyle.color == 'blue') {
        this.setState({
          customestyle: {
            color: 'red'
          }
        })

      } else if (this.state.customestyle.color == 'red') {
        this.setState({
          customestyle: {
            color: 'green'
          }
        })
      } else {
        this.setState({
          customestyle: {
            color: 'blue'
          }
        })
      }
    }, 1000)

  }
  // here end the defination of customstyle-function...

  // here start the defination of aleart-function...
  handleclick() {
    Alert.alert("you tapped button");  
  }
  // here end the defination of aleart-function...

  render() {
    return (
      <ScrollView >
        <View style={styles.container}>

          <Text style={[styles.welcome, this.state.customestyle]}>
            Joshi Biz Tech
          </Text>

          <TextInput placeholder="Username"
            style={{ fontSize: 20, height: 45 }}
            secureTextEntry={false}
            maxLength={10} />

          <TextInput placeholder="Password"
            style={{ fontSize: 20, height: 45 }}
            secureTextEntry={true}
            maxLength={10} />

          <AwesomeButton onPress={this.handleclick}>Submit</AwesomeButton>
          
        </View>

      </ScrollView>
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
    color: '#009',
    textAlign: 'center',
    margin: 10,
  },
});
