import React, {Component} from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {styles} from '../shared/globalStyles';
import {GlobalProps} from '../interfaces/RootInterface';
import {Colors} from '../shared/Colors';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface LocalProps extends GlobalProps {
  isHideMenuNav?: boolean;
}

class HeaderComponent extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  private onPressMenuToggle() {
    this.props.navigation.toggleDrawer();
  }
  private onPressOpenShoppingCart() {
    this.props.navigation.navigate('ShoppingCart');
  }

  private renderCartWithBadge() {
    return (
      <RectButton
        onPress={() => this.props.navigation.navigate('ShoppingCart')}>
        <View>
          <Icon
            name="shopping-cart"
            type="font-awesome-5"
            color={Colors.white}
            onPress={() => this.props.navigation.navigate('ShoppingCart')}
          />
          <Badge
            status="error"
            value={5}
            containerStyle={{position: 'absolute', top: -4, right: -4}}
          />
        </View>
      </RectButton>
    );
  }

  render() {
    const title = this.props.route.name;
    const isHideMenuNav = this.props.isHideMenuNav
      ? this.props.isHideMenuNav
      : false;

    return isHideMenuNav ? (
      <Header
        placement="left"
        leftComponent={{
          icon: 'arrow-left',
          type: 'font-awesome-5',
          color: Colors.white,
          onPress: () => this.props.navigation.goBack(),
        }}
        centerComponent={{
          text: title,
          style: {color: Colors.white, fontSize: 20, fontWeight: '700'},
        }}
        containerStyle={styles.headerContainer}
      />
    ) : (
      <Header
        placement="left"
        leftComponent={{
          icon: 'bars',
          type: 'font-awesome-5',
          color: Colors.white,
          onPress: () => this.onPressMenuToggle(),
        }}
        centerComponent={{
          text: title,
          style: {color: Colors.white, fontSize: 20, fontWeight: '700'},
        }}
        rightComponent={this.renderCartWithBadge()}
        containerStyle={styles.headerContainer}
      />
    );
  }
}

export default HeaderComponent;
