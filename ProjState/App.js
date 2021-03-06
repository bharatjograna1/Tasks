import { StackNavigator } from 'react-navigation';
import Home from './Home.js';
import Second from './Second.js';
import Registration from './Registration'

export default StackNavigator({

    Home: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Home'
        })
    },
    Second: {
        screen: Second,
        navigationOptions: () => ({
            title: 'Second'
        })
    },
    Registration: {
        screen: Registration,
        navigationOptions: () => ({
            title: 'Registration'
        })
    },

});