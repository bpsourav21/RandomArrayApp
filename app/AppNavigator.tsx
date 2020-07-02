import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home';
import Profile from './components/Profile';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerContent from '../app/components/Drawer';
import {ParamList} from '../app//interfaces/RootInterface';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator<ParamList>();

const AppNavigator = () => {
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
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
