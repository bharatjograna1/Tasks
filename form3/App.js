/**
 * Login form with some validation...
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        TextInput,
        Alert,
        ImageBackground} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import background from "./image/background.jpg";
import { Div } from 'react-native-div';

export default class App extends Component {

  constructor(){
    super();
    this.handleclick = this.handlelogin.bind(this);
    this.state = {username: '',
                 password: ''  
                 }
  }

  handlelogin(){ 
    this.setState({
      username:'',
      password:''
    })
            Alert.alert("Successfully login !");
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

        onChangeText={(username) => this.setState({username})} 
        value={this.state.username}/>

        <TextInput 
        style={styles.content}
        placeholder="Password"
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholderTextColor="#009"
        underlineColorAndroid="transparent"
        onChangeText={(text) => this.setState({text})}
        maxLength={25}
        onChangeText={(password) => this.setState({password})} 
        value={this.state.password}/>


        <AwesomeButton
        backgroundColor='#099fff' 
        onPress={this.handlelogin}>Login</AwesomeButton>

        <Text>{this.state.Text}</Text>

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
    opacity:0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  division: {
    flexDirection:'column',
    height:250,
    width:250,
    backgroundColor:"#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    fontSize:35,
    color:"#000",
  },
  content:{
    fontSize:20,
    backgroundColor:"#ccc",
  },
});
// this program is written by Bharat Jograna.