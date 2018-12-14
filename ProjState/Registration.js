import React from 'react'
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import ValidationComponent from 'react-native-form-validator'

const namerule = /^[a-zA-Z][a-zA-Z ]*$/;

export default class Registration extends ValidationComponent {

    state = {
        name: "",
        date: "",
        contact: "",
        email: "",
        password: "",
        erstate: "",
    }

    handlevalid = () => {

        if (this.validate({ name: { minlength: 2, required: true } }) && namerule.test(this.state.name) === true) {
            this.setState({ erstate: "" })
            if (this.validate({ date: { date: 'DD-MM-YYYY' } })) {

                if (this.validate({ contact: { minlength: 9 } })) {

                    if (this.validate({ email: { email: true } })) {

                        if (this.validate({ password: { minlength: 3 } })) {

                            this.props.navigation.navigate('Home');

                        } else { alert("invalid password") }

                    } else { alert("invalid email") }

                } else { alert("invalid numbers") }

            } else { alert("invalid date") }

        } else { this.setState({ erstate: "invalid name" }) }

    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    placeholder="enter name"
                    maxLength={10}
                    onChangeText={nameconst => this.setState({ name: nameconst })}
                />
                <Text>{this.state.erstate}</Text>

                <TextInput
                    placeholder="dd-mm-yyyy"
                    maxLength={8}
                    onChangeText={dateconst => this.setState({ date: dateconst })}
                />
                <Text>{this.state.erstate}</Text>

                <TextInput
                    placeholder="enter contact no"
                    maxLength={10}
                    onChangeText={contactconst => this.setState({ contact: contactconst })}
                />
                <Text>{this.state.erstate}</Text>

                <TextInput
                    placeholder="enter email"
                    onChangeText={emailconst => this.setState({ email: emailconst })}
                />
                <Text>{this.state.erstate}</Text>

                <TextInput
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={passwordconst => this.setState({ password: passwordconst })}
                />
                <Text>{this.state.erstate}</Text>

                <TouchableOpacity onPress={this.handlevalid}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>


            </View >
        )
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
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "#009",
    },
    instructions: {
        color: '#fff',
    },
});
