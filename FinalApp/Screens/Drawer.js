import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


class Drawer extends Component {

    constructor() {
        super();
        this.handlepress = this.handlepress.bind(this);
    }
    handlepress() {
        this.props.navigation.navigate('login');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.photo}
                        source={{ uri: "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/67639.jpg" }} />
                </View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.handlepress}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    photo: {
        height: 175,
        width: 175,
        margin: 25,
    },
    content: {
        flex: 1,
        alignItems: "center",
        // backgroundColor: "#ccc",
    }
});


export default Drawer;