import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {increment} from '../actions/contentAction';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import Header from './Header';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';

interface LocalProps extends GlobalProps {
  date: string;
}

class Home extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  render() {
    console.log('home', this.props);
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} />
        <View style={styles.container}>
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

          <Text>date- {this.props.date}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    date: state.Content.Date,
  };
};

export default connect(mapStateToProps)(Home);
