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

interface LocalProps extends GlobalProps {}

class ShoppingCart extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }

  render() {
    var arr = [
      {
        imgUrl:
          'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
        name: 'CHECK PRINT SHIRT',
        unit: '1 pc',
        quantity: 5,
        price: 110,
      },
      {
        imgUrl:
          'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
        name: 'GLORIA HIGH LOGO SNEAKER',
        unit: '1 pc',
        quantity: 5,
        price: 91,
      },
      {
        imgUrl:
          'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
        name: 'CATE RIGID BAG',
        unit: '1 pc',
        quantity: 0,
        price: 94.5,
      },
      {
        imgUrl:
          'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
        name: 'GUESS CONNECT WATCH',
        unit: '1 pc',
        quantity: 5,
        price: 438.9,
      },
      {
        imgUrl:
          'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
        name: "'70s RETRO GLAM KEFIAH",
        unit: '1 pc',
        quantity: 5,
        price: 20,
      },
    ];
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} isHideMenuNav={true} />
        <View style={styles.container}>
          <View style={{flex: 9}}>
            <ProductList {...this.props} data={arr} isSwipeable={true} />
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
  return {};
};

export default connect(mapStateToProps)(ShoppingCart);
