
// import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';
import Homeobj from './Home';

export default StackNavigator ({
  home: {
    screen: Homeobj,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
});

{/* <Ionicons name="md-checkmark-circle-outline" size={32} color="green" /> */}
