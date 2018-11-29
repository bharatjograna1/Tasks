/**
 * 
 * Sample React Native App
 *
 */

import { StackNavigator } from 'react-navigation';


import Splash from './Splash';
import DrawerMenu from './Menu';
import Home from './BuyScr/Home';
import Detail from './BuyScr/Detail';
import ProductList from './BuyScr/ProductList';
import Product from './BuyScr/Product';
import Cart from './BuyScr/Cart';
import Buy from './BuyScr/Buy';
import Bill from './BuyScr/Bill';

import Register from './SellScr/Register';
import Login from './SellScr/Login';
import ProductAdd from './SellScr/ProductAdd';
import ProductMass from './SellScr/ProductMass';



const MainScreens = StackNavigator({

  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      title: 'Detail',
    }),
  },
  ProductList: {
    screen: ProductList,
    navigationOptions: () => ({
      title: 'ProductList',
    }),
  },
  Product: {
    screen: Product,
    navigationOptions: () => ({
      title: 'Product',
    }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: () => ({
      title: 'Cart',
    }),
  },
  Buy: {
    screen: Buy,
    navigationOptions: () => ({
      title: 'Buy',
    }),
  },
  Bill: {
    screen: Bill,
    navigationOptions: () => ({
      title: 'Bill',
    }),
  },



  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Register',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  ProductAdd: {
    screen: ProductAdd,
    navigationOptions: () => ({
      title: 'ProductAdd',
    }),
  },
  ProductMass: {
    screen: ProductMass,
    navigationOptions: () => ({
      title: 'ProductMass',
    }),
  },

});

const Drawer = DrawerNavigator({
  Draw: {
    screen: MainScreens
  }
},
  {
    contentComponent: DrawerMenu,
    drawerWidth: 300
  }
);

export default Drawer;
