import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import photo from './img/background.jpg';

export default class Splash extends Component {

    // this method call after render so move to next page
    componentDidMount() {
        this.props.navigation.replace('home');
    }


    render() {
        return (
            <ImageBackground
                source={photo}
                style={styles.photo}
            />
        )
    }
}

const styles = StyleSheet.create({
    photo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


// (c)Bharat Jograna