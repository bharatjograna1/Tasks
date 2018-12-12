import React, { Component } from 'react'
import { Text, StyleSheet, TextInput, View } from 'react-native'
import { First } from './Second'

export default class Home extends Component {

    state = {
        input: ""
    }

    handlepress = () => {
        this.props.navigation.navigate('Second');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={inputConst => this.setState({ input: inputConst })}
                    style={styles.instructions}
                />
                <Text onPress={this.handlepress} style={styles.welcome}>Home js !</Text>
                <Text>{this.state.input}</Text>
                <First message={"Submit"} />
            </View>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "#009",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        backgroundColor: "#ccc"
    },
});
