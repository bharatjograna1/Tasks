import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Second extends Component {

    handlepress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.handlepress} style={styles.welcome}>Second JS !</Text>
                <First />
            </View>
        )
    }
}

export class First extends Second {
    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
            </View>
        );
    }
}

First.defaultProps = {
    message: "Login"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "#009",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
