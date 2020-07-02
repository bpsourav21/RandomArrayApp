import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, BackHandler} from 'react-native';
import AppNavigator from './AppNavigator';
import store from './store/store';

declare const global: {HermesInternal: null | {}};

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    // Note that this component does not mount until initdata is extracted and stores are prepped
    // if (Platform.OS === 'ios') {
    //   SplashScreen.hide();
    // }
    BackHandler.addEventListener('hardwareBackPress', this.onHardwareBackPress);
  }

  public componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onHardwareBackPress,
    );
  }

  private onHardwareBackPress() {
    console.log('hardware back pressed');
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
