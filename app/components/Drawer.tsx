import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import styles from '../shared/globalStyles';

class DrawerContent extends Component {
  render() {
    const props = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.drawerContainer}>
          <Text style={{color: 'white', fontSize: 30}}>Header</Text>
        </View>
        <View style={{flex: 3}}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => console.log('pressed')} />
          </DrawerContentScrollView>
        </View>
      </View>
    );
  }
}

export default DrawerContent;
