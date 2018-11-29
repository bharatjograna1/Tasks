/**
 * 
 * Sample React Native App
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Alert, ImageBackground } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import background from "../Images/background.jpg";
import { Div } from 'react-native-div';

export default class App extends Component {

  static navigationOptions = () => ({
    title: "Login",
  });


  constructor() {
    super();
    this.handlelogin = this.handlelogin.bind(this);
  }

  handlelogin() {
    this.props.navigation.navigate('home');
  }

  render() {
    return (

      <ImageBackground source={background} style={[styles.picture]}>


        <Div style={styles.division}>

          <Text style={styles.welcome}>Joshi Biz Tech</Text>

          <TextInput
            style={styles.content}
            placeholder="Username"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholderTextColor="#009"
            underlineColorAndroid="transparent"
            maxLength={25}
          />

          <TextInput
            style={styles.content}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            placeholderTextColor="#009"
            underlineColorAndroid="transparent"
            maxLength={25}
          />


          <AwesomeButton
            backgroundColor='#099fff'
            onPress={this.handlelogin}>Login</AwesomeButton>

        </Div>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  division: {
    flexDirection: 'column',
    height: 250,
    width: 250,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 35,
    color: "#000",
  },
  content: {
    fontSize: 20,
    backgroundColor: "#ccc",
  },
});
// this program is written by Bharat Jograna.