import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

class Profile extends Component {
  render() {
    console.log('profile', this.props);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>This is top text.</Text>
        <Text>This is bottom text.</Text>
      </SafeAreaView>
    );
  }
}

export default Profile;
