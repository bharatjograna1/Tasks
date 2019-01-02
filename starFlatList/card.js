import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import icon from './avatar.png';

export default class card extends Component {

    state = {
        hidePassword: true
    }
    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {
        return (
            <View style={styles.containercss}>

                <View style={styles.photocss}>
                    <Image source={icon} style={{ height: 70, width: 70 }} />
                </View>

                <View style={styles.textcss}>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.data.name}</Text>
                    <Text>{this.props.data.address1}</Text>
                    <Text>{this.props.data.address2}</Text>
                </View>

                <View style={styles.starcss}>
                    <Text style={{ paddingBottom: 9 }}>{this.props.data.time}</Text>
                    <TouchableOpacity
                        onPress={this.managePasswordVisibility}
                    >
                        {this.state.hidePassword ?
                            <Image
                                source={require('./assets/full.png')}
                                style={styles.btnImage}
                            /> :
                            <Image
                                source={require('./assets/empty.jpg')}
                                style={styles.btnImage}
                            />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    containercss: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 100,
        borderWidth: 2,
        borderColor: "#ccc",
        // backgroundColor: "#000",
    },

    photocss: {
        flex: 3 / 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        // backgroundColor: "#009",
    },

    textcss: {
        flex: 5 / 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // backgroundColor: "#090",
    },

    starcss: {
        flex: 2 / 10,
        padding: 10,
        flexDirection: 'column',
        // backgroundColor: "#900",
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    btnImage: {
        height: 50,
        width: 50,
    }

});



// (c)Bharat Jograna