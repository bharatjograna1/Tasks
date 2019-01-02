import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, View } from 'react-native';
import background from './backg.jpg';
import ValidationComponent from 'react-native-form-validator';


export default class App extends ValidationComponent {

  state = {
    usernamestate: "",
    emailstate: "",
    passwordstate: "",
    cpasswordstate: ""
  }

  // to validate user input
  handleSubmit = () => {

    const namerule = /^[a-zA-Z0-9_]*$/;

    if (this.validate({ usernamestate: { minlength: 5 } }) && namerule.test(this.state.usernamestate) === true) {
      if (this.validate({ emailstate: { email: true } })) {
        if (this.validate({ passwordstate: { minlength: 3 } })) {
          if (this.state.passwordstate == this.state.cpasswordstate) {
            alert("Sussecc...")
          } else { alert("password not match...!") }
        } else { alert("password...!") }
      } else { alert("email...!") }
    } else { alert("username...!") }
  }


  render() {
    return (
      <ImageBackground source={background} style={styles.picture}>

        <Text style={styles.welcome}>SIGN UP</Text>

        <View style={styles.TexInput}>
          <Text style={styles.TextInput_tex}>USERNAME</Text>
          <TextInput
            style={styles.instructions}
            placeholder="  username129"
            placeholderTextColor="#fff"
            secureTextEntry={false}
            onChangeText={firstconst => this.setState({ usernamestate: firstconst })}
          />
        </View>

        <View style={styles.TexInput}>
          <Text style={styles.TextInput_tex}>EMAIL</Text>
          <TextInput
            style={styles.instructions}
            placeholder="  username@me.com"
            placeholderTextColor="#fff"
            secureTextEntry={false}
            onChangeText={firstconst => this.setState({ emailstate: firstconst })}
          />
        </View>

        <View style={styles.TexInput}>
          <Text style={styles.TextInput_tex}>PASSWORD</Text>
          <TextInput
            style={styles.instructions}
            placeholder="  ************"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={firstconst => this.setState({ passwordstate: firstconst })}
          />
        </View>

        <View style={styles.TexInput}>
          <Text style={styles.TextInput_tex}>CONFIRM PASSWORD</Text>
          <TextInput
            style={styles.instructions}
            placeholder="  ************"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={firstconst => this.setState({ cpasswordstate: firstconst })}
          />
        </View>

        <TouchableOpacity
          style={{
            height: 40,
            backgroundColor: "#099fff",
            alignItems: 'center',
            justifyContent: 'center',
            margin: 50,
            marginBottom: 10,
            borderRadius: 50,
          }}
          onPress={this.handleSubmit}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>CORNFIRM</Text>
        </TouchableOpacity>

        <View style={styles.input}>

          <Text style={{ color: "#fff", paddingRight: 5 }}>already user?</Text>
          <TouchableOpacity
            onPress={this.signup}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>
              click here
                    </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.privacy}>

          <TouchableOpacity
            onPress={this.signup}
          >
            <Text style={{ color: "#fff", fontSize: 12, paddingRight: 50 }}>
              PRIVACY POLICE
                    </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.signup}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>
              TERMS OF SERVICE
                    </Text>
          </TouchableOpacity>

        </View>

      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: 0.9,
    justifyContent: 'center',
    padding: 50,
  },

  welcome: {
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: "#fff",
    paddingTop: 50,
  },

  TexInput: {
    paddingTop: 20,
  },

  TextInput_tex: {
    color: "#fff",
    padding: 5,
    paddingLeft: 20,
  },
  instructions: {
    color: '#fff',
    backgroundColor: "#c0c0c0",
    borderRadius: 50,
    opacity: 0.9
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  privacy: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  }
});


// (c)Bharat Jograna