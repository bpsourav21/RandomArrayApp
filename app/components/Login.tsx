import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, Button, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {Input} from 'react-native-elements';
import {verticalSpacer} from '../shared/Helpers';
// import {login} from '../actions/authAction';

interface LocalProps extends GlobalProps {}

class Login extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.containerCentered}>
          {/* <Input
            placeholder="INPUT WITH ICON"
            leftIcon={{type: 'font-awesome', name: 'envelope'}}
            label="Enter email address"
            errorStyle={styles.error}
            errorMessage="ENTER A VALID ERROR HERE"
            leftIconContainerStyle={{width: 30}}
          />

          <Input
            placeholder="INPUT WITH ICON"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            label="Enter password"
            errorStyle={styles.error}
            errorMessage="ENTER A VALID ERROR HERE"
            leftIconContainerStyle={{width: 30}}
            secureTextEntry={true}
          /> */}

          <Input
            placeholder="+8801671820025"
            leftIcon={{type: 'font-awesome', name: 'phone'}}
            label="Enter Phone Number"
            errorStyle={styles.error}
            errorMessage="ENTER A VALID ERROR HERE"
            leftIconContainerStyle={{width: 30}}
          />
          {verticalSpacer(20)}
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('OTP')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(Login);
