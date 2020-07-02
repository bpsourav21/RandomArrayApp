import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';

interface LocalProps extends GlobalProps {}

class Profile extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} />
        <View style={styles.containerCentered}>
          <Text>profile screen</Text>
          <Button
            title="press me"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(Profile);
