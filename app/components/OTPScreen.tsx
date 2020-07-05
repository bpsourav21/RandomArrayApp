import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {Input} from 'react-native-elements';
import {login} from '../actions/authAction';
import {renderButton, verticalSpacer} from '../shared/Helpers';

interface LocalProps extends GlobalProps {}

class OTPScreen extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.containerCentered}>
          <Input
            placeholder="Enter OTP eg: 1234"
            // errorStyle={styles.error}
            // errorMessage="ENTER A VALID ERROR HERE"
          />

          {/* <Button title="Login" onPress={() => this.props.dispatch(login())} />
          <Button title="Resend" onPress={() => this.props.dispatch(login())} /> */}
          {renderButton('Login', () => this.props.dispatch(login()))}
          {verticalSpacer(10)}
          {renderButton('Resend', () => this.props.dispatch(login()))}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(OTPScreen);
