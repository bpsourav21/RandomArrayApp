import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {styles, textStyle} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import {renderButton} from '../shared/Helpers';
import {Colors} from '../shared/Colors';
import {CartItemDto} from '../interfaces/ShppingCart';

interface LocalProps extends GlobalProps {
  cart: CartItemDto;
}

class ShoppingCart extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} isHideMenuNav={true} />
        <View style={styles.container}>
          <View style={{flex: 9}}>
            <ProductList
              {...this.props}
              data={this.props.cart}
              isSwipeable={true}
            />
          </View>
          <View style={{flex: 3}}>
            <View style={[styles.flexRow1, {alignItems: 'center'}]}>
              <View style={styles.flex1}>
                <Text style={[textStyle('#000', 18, '600'), styles.textLeft]}>
                  Sub Total
                </Text>
                <Text style={[textStyle('#000', 18, '600'), styles.textLeft]}>
                  Delivery Fee
                </Text>
                <Text style={[textStyle('#f00', 18, '600'), styles.textLeft]}>
                  Discount
                </Text>
                <Text style={[textStyle('#000', 22, '700'), styles.textLeft]}>
                  Total
                </Text>
              </View>
              <View style={styles.flex1}>
                <Text style={[textStyle('#000', 18, '600'), styles.textRight]}>
                  {`৳ ${100}`}
                </Text>
                <Text style={[textStyle('#000', 18, '600'), styles.textRight]}>
                  {`৳ ${20}`}
                </Text>
                <Text style={[textStyle('#f00', 18, '600'), styles.textRight]}>
                  {`৳ ${0}`}
                </Text>
                <Text style={[textStyle('#000', 22, '700'), styles.textRight]}>
                  {`৳ ${120}`}
                </Text>
              </View>
            </View>
          </View>
          <View>
            {renderButton(
              'Proceed to checkout',
              () => this.props.navigation.navigate('Checkout'),
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
  return {
    cart: state.Cart.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
