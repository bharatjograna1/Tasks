import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex:1,
        paddingTop:20,
        paddingBottom: 30,
        backgroundColor: '#fff',
    },
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
              events: this.state.events.map(evt => ({
                ...evt,
                timer: Date.now(),
              })),
            });
          }, 1000);


        const events = require('./db.json').events.map(e =>({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events });
    }

    handleAddEvent = () => {
        this.props.navigation.navigation('form');
    }

    render() {
        return(
            <FlatList
            style={styles.list}
            data = {this.state.events}
            renderItem = {({ item }) => <EventCard event= { item } />}
            keyExtractor = {item => item.id}
            />
        );
    }
}

export default EventList;