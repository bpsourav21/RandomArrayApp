import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home';
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

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator<ParamList>();

interface LocalProps extends GlobalProps {}

class AppNavigator extends Component<LocalProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContentOptions={{
              activeTintColor: '#0d0d0d',
              itemStyle: {marginVertical: 0},
            }}
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Login" component={Login} />
          </Drawer.Navigator>
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
