import React from 'react';
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, View, Button } from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import AwesomeButton from 'react-native-really-awesome-button';
import photo from './img/logo.jpg';

export default class Login extends ValidationComponent {

    state = {
        email: "",
        password: "",
    }

    handlevalid = () => {

        if (this.validate({ email: { email: true } })) {

            if (this.validate({ password: { minlength: 3 } })) {

                Alert.alert("Logined !")

            } else { alert("invalid password") }

        } else { alert("invalid email") }

    }

    forgot = () => {
        alert("forgot password");
    }

    signup = () => {
        alert("Sign up");
    }

    render() {
        return (
            <View style={styles.container}>

                <Image source={photo} style={{ height: 150, width: 150 }} />
                <Text style={styles.welcome}>Welcome Back,</Text>
                <Text style={styles.instructions}>Sign in to continue</Text>

                <Text style={{ color: "#000" }}>Email</Text>
                <TextInput
                    placeholder="bharat.jograna@jbspl.com"
                    secureTextEntry={true}
                    onChangeText={emailconst => this.setState({ email: emailconst })}
                />
                <Text style={{ color: "#000" }}>Password</Text>
                <TextInput
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={passwordconst => this.setState({ password: passwordconst })}
                >

                </TextInput>

                <TouchableOpacity
                    onPress={this.forgot}
                >
                    <Text style={{ textAlign: 'right', fontSize: 17, paddingBottom: 10 }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <Button
                    color="#8A2BE2"
                    title="Login"
                    onPress={this.handlevalid}>
                </Button>

                <View style={styles.input}>

                    <Text>Not user?</Text>
                    <TouchableOpacity
                        onPress={this.signup}
                    >
                        <Text style={{ color: "#8A2BE2", fontWeight: 'bold', fontSize: 17 }}>
                            Singup
                    </Text>
                    </TouchableOpacity>

                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10,
        padding: 10,
    },
    welcome: {
        fontSize: 25,
        color: "#000",
        marginTop: 20,
    },
    instructions: {
        marginBottom: 50,
    },
    input: {
        flexDirection: 'row',
        marginTop: 20,
    },
});



// (c)Bharat Jograna