import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import Logo from './logo.jpg';

export default class Splash extends Component {

    constructor() {
        super();
        this.gofunction = this.gofunction.bind(this);
    }

    gofunction() {

        // let that = this;
        // setTimeout(function () { that.setState({ timePassed: true }) }, 1000);


        // for (let i = 0; i > 0; i++) {
        //     for (let j = 0; j > 0; j++) {
        //         for (let k = 0; k < 1225; k++) {
        //             for (let k = 0; k < 1225; k++) { }
        //         }
        //     }
        //     this.props.navigation.navigate('homescr');
        // }

        // setTimeout(function () {

        //     //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        // this.props.navigation.navigate('homescr');
        //     Alert.alert("time out");

        // }, 3000);


        this.props.navigation.navigate('homescr');
    }

    render() {
        return (
            <View>
                <Image source={Logo} />
                <TouchableOpacity onLayout={this.gofunction} />
            </View>
        );
    }
}