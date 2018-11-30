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
                <View style={styles.photo}>
                    <Image
                        style={styles.photo}
                        source={{ uri: "https://cdn.images.express.co.uk/img/dynamic/galleries/x701/67639.jpg" }} />
                </View>
                <View>
                    <TouchableOpacity onPress={this.handlepress}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={this.handlepress}
                    >
                        <Text style={styles.menuItemText}>Pied Piper</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={this.handlepress}
                    >
                        <Text style={styles.menuItemText}>Hooli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: "#d6eaf8",
    },
    photo: {
        height: 175,
        width: 175,
        alignItems: 'center',
    },
    menuItem: {
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#5dade2",
        marginBottom: 10,
    },
    menuItemText: {
        fontSize: 20
    }
});


export default Drawer;