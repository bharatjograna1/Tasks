/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import EventList from './EventList';
import { StackNavigator } from 'react-navigation';
import EventForm from './EventForm';

export default StackNavigator ({
  List: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add New Event',
    }),
  },
});
