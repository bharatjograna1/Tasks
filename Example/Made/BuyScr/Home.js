/**
 * 
 * Sample React Native App
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, ScrollView, View, TouchableOpacity } from 'react-native';
import Card from '../Card.js';
import Icon from "react-native-vector-icons/MaterialIcons";


class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: (
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={35} color="green" />
                </TouchableOpacity>
            </View>
        )
    });

    state = {
        events: []
    }

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.navigation.navigate('home');
    }


    componentDidMount() {
        const event = require('../db.json');
        this.setState({ events: event });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <Image
                        style={styles.photo}
                        source={{ uri: "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/67639.jpg" }} />


                    <FlatList style={{ alignSelf: 'center' }}
                        data={this.state.events}
                        renderItem={({ item }) => <Card onPress={this.handleClick} event={item} />}
                    />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        height: 250,
        width: 250,
    },
});


export default Home;