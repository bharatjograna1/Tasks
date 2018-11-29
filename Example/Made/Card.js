/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Card({ event }) {
        return(
            <View style={styles.container}>
                <View style={styles.context}>
                    <View>
                    <Image
                    style={styles.photo}
                    source = {{ uri: "https://images-na.ssl-images-amazon.com/images/I/71j5koJc2SL._SX355_.jpg" }} />
                    </View>
                    <View style={styles.textcss}>
                        <Text style={{fontSize:25}}>{event.name}</Text>
                        <Text style={{fontSize:15}}>{event.product}</Text>
                        <Text style={{fontSize:10}}>Welcome-come to React native !</Text>
                    </View>
                </View>
            </View>
        );
}



const styles = StyleSheet.create ({
    container: {
        flex:8,
        padding:10,
        margin:5,
        backgroundColor:'#099fff',
        justifyContent: 'center',
        minWidth:400,
        maxWidth:400,
    },
    context: {
        flex:1,
        flexDirection:'row',
        padding:10,
        backgroundColor:'#ccc',
    },
    photo: {
        height:150,
        width:150,
        padding:10,
        margin:5,
    },
    textcss: {
        padding:10,
        margin:5,
        fontSize:25,
        textAlign:'left',
        backgroundColor:'#fff',
        minWidth:200,
        maxWidth:200,
    },
});