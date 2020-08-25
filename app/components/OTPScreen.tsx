import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {Input} from 'react-native-elements';
import {login, setStorageData} from '../actions/authAction';
import {renderButton, verticalSpacer} from '../shared/Helpers';
import {Colors} from '../shared/Colors';

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
          {renderButton(
            'Login',
            () => this.props.dispatch(login()),
            Colors.standard,
          )}
          {verticalSpacer(10)}
          {renderButton(
            'Resend',
            () => this.props.dispatch(setStorageData('01671820025')),
            Colors.standard,
            undefined,
            undefined,
            'outline',
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(OTPScreen);
