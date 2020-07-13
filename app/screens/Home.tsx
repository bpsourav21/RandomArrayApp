import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import ProductList from '../components/ProductList';

interface LocalProps extends GlobalProps {}

class Home extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
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
        quantity: 5,
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
        <Header {...this.props} />
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <ProductList {...this.props} data={arr} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(Home);
