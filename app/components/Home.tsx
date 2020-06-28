import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {increment} from '../actions/contentAction';
import {SafeAreaView} from 'react-native-safe-area-context';

class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />

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
