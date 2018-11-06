import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TextInput,
    StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatedatetime, setEvent } from './api';

class EventForm extends Component {
    state = {
        title: "",
        date: '',
    }

    handleaddpress = () => {
        setEvent(this.state);
        this.props.navigation.navigate('List');
    }

    handleinputpress = (value) => {
        this.setState({ title: value });
    }

    handledatepick = () => {
        this.setState({ showDatePicker: true });
    }

    handledatepickd = (date) => {
        this.setState({
            date,
        });

        this.handledatepickhide();
    }

    handledatepickhide = () => {
        this.setState({ showDatePicker: false })
    }

    render() {
        return(
            <View>
                <TextInput 
                style={styles.texinput}
                placeholder="Event Title"
                spellCheck={false}
                value={this.state.title}
                onChange={this.handleinputpress}
                />

                <TextInput
                placeholder="Event Date"
                spellCheck={false}
                value={ formatedatetime(this.state.date.toString()) }
                editable={ !this.state.showDatePicker }
                onFocus={this.handledatepick}
                />

                <DateTimePicker
                isVisible={this.state.showDatePicker}
                mode="datetime"
                onConfirm={this.handledatepickd}
                onCancel={this.handledatepickhide}
                />

                <TouchableHighlight
                style={styles.button}
                onPress={this.handleaddpress}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;

const styles = StyleSheet.create({
    texinput: {
        flex:1,
        paddingTop:20,
        paddingBottom: 30,
        backgroundColor: '#fff',
    },
    button: {
        height:50,
        backgroundColor:'#099fff',
        justifyContent: 'center',
        alignItems:'center',
    },
});