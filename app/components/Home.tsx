import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {increment} from '../actions/contentAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import Header from './Header';
import styles from '../shared/globalStyles';

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header {...this.props} />
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Icon
          raised
          name="heartbeat"
          type="font-awesome-5"
          color="#f50"
          onPress={() => console.log('hello')}
        />

        <Icon raised name="wind" type="font-awesome-5" />

        <Button
          title="Count"
          onPress={() => this.props.dispatch(increment())}
        />

        <Text>date- {this.props.Home}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Home: state.Content.Date,
  };
};

export default connect(mapStateToProps)(Home);
