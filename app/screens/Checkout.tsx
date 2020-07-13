import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {styles, textStyle} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {renderButton, verticalSpacer} from '../shared/Helpers';
import {Colors} from '../shared/Colors';
import {CheckBox} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface LocalProps extends GlobalProps {}

class Checkout extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} isHideMenuNav={true} />
        <View style={styles.container}>
          <View style={{flex: 9}}>
            <Text style={[textStyle('#000', 18, '700'), styles.textLeft]}>
              Delivery Address
            </Text>
            <View>
              <CheckBox
                title="Home"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={true}
                checkedColor={Colors.standard}
              />
              <CheckBox
                title="Office"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={true}
                checkedColor={Colors.standard}
              />
              <CheckBox
                title="Click Here to Remove This Item"
                titleProps={() => (
                  <Text style={[textStyle('#000', 18, '700'), styles.textLeft]}>
                    Delivery Address
                  </Text>
                )}
                iconType="material"
                checkedIcon="add"
                uncheckedIcon="add"
                checkedColor="red"
                checked={true}
              />
            </View>
          </View>
          <View>
            <View style={[styles.flexRow1, {alignItems: 'center'}]}>
              <View style={styles.flex1}>
                <Text style={[textStyle('#000', 18, '700'), styles.textLeft]}>
                  {`Total ${4} items in cart`}
                </Text>
              </View>
              <View style={styles.flex1}>
                <Text style={[textStyle('#000', 22, '700'), styles.textRight]}>
                  {`৳ ${120}`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ShoppingCart')}>
              <Text
                style={[
                  textStyle(Colors.standard, 15, '300'),
                  styles.textLeft,
                  {marginTop: 10},
                ]}>
                {'View cart details'}
              </Text>
            </TouchableOpacity>
          </View>
          {verticalSpacer(30)}
          <View>
            {renderButton(
              'Place Order',
              () => console.log('checkout'),
              Colors.standard,
              20,
              30,
              undefined,
              false,
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(Checkout);
