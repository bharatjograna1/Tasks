import { StackNavigator, DrawerNavigator } from "react-navigation";
import Home from './Screens/Home.js';
import DrawerMenu from './Screens/Drawer.js';
import Login from './Screens/Login.js';

const MainScreens = StackNavigator({

  home: {
    screen: Home
  },

  login: {
    screen: Login
  },

});

const Drawer = DrawerNavigator({
  Draw: {
    screen: MainScreens
  },

},
  {
    contentComponent: DrawerMenu,
    drawerWidth: 300
  }
);

export default Drawer;