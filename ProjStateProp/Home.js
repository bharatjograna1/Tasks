import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends Component {

    handlepress = () => {
        this.props.navigation.navigate('Second');
    }


    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.handlepress} style={styles.welcome}>Home js !</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#009',
    },
});