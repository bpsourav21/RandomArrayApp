import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {styles, textStyle} from '../shared/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Avatar} from 'react-native-elements';
import {GlobalProps, GlobalState} from '../interfaces/RootInterface';
import {connect} from 'react-redux';
import {logout, login} from '../actions/authAction';
import {Colors} from '../shared/Colors';

interface LocalProps extends GlobalProps {
  isAuthenticated: boolean;
}

class DrawerContent extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  private onButtonPressed() {
    if (this.props.isAuthenticated) {
      this.props.dispatch(logout());
      this.props.navigation.closeDrawer();
    } else {
      this.props.dispatch(login());
    }
  }
  render() {
    const props = this.props;
    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.drawerContainerTop}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: 'https://www.w3schools.com/w3images/avatar2.png',
            }}
          />
          <Text style={textStyle(Colors.white, 20)}>Header</Text>
        </View>
        <View style={styles.drawerContainerMiddle}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => console.log('pressed')} />
          </DrawerContentScrollView>
        </View>
        <View style={styles.drawerContainerBottom}>
          <TouchableOpacity onPress={() => this.onButtonPressed()}>
            <Icon
              raised
              name={this.props.isAuthenticated ? 'sign-out' : 'sign-in'}
              type="font-awesome"
              color={Colors.standard}
              size={20}
            />
            <Text style={styles.textCenter}>
              {this.props.isAuthenticated ? 'Sign out' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(DrawerContent);
