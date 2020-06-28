import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import AppNavigator from './AppNavigator';
import store from './store/store';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
