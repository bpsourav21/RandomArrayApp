import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/Home';
import Profile from './components/Profile';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerContent from '../app/components/Drawer';
import {
  ParamList,
  GlobalProps,
  GlobalState,
} from '../app/interfaces/RootInterface';
import Login from './components/Login';
import {connect} from 'react-redux';
import OTPScreen from './components/OTPScreen';
import {getStorageData} from './actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';
import ShoppingCart from './screens/ShoppingCart';
import ProductDetails from './screens/ProductDetails';
import Checkout from './screens/Checkout';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator<ParamList>();

interface LocalProps extends GlobalProps {
  isAuthenticated: boolean;
}

class AppNavigator extends Component<LocalProps, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getStorageData());
  }

  render() {
    const drawerNavigationContent = (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#0d0d0d',
          itemStyle: {marginVertical: 0},
        }}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="ShoppingCart" component={ShoppingCart} />
        <Drawer.Screen name="ProductDetails" component={ProductDetails} />
        <Drawer.Screen name="Checkout" component={Checkout} />
      </Drawer.Navigator>
    );
    const stackNavigationContent = (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: this.props.isAuthenticated
              ? 'push'
              : 'pop',
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            animationTypeForReplace: 'push',
          }}
        />
      </Stack.Navigator>
    );
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          {this.props.isAuthenticated
            ? drawerNavigationContent
            : stackNavigationContent}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AppNavigator);
