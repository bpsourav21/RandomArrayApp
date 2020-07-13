import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator, Text, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {styles, itemWidth, itemHeight, textStyle} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {Image, Icon} from 'react-native-elements';
import {verticalSpacer, renderButton} from '../shared/Helpers';
import {Colors} from '../shared/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface LocalProps extends GlobalProps {}

class Home extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  render() {
    const item = {
      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      name: 'CHECK PRINT SHIRT',
      unit: '1 pc',
      quantity: 5,
      price: 110,
    };

    const buttonBlock =
      item.quantity === 0 ? (
        <View style={[styles.flexRow1, {justifyContent: 'flex-end'}]}>
          {renderButton(
            'Add to Cart',
            () => console.log('checkout'),
            Colors.standard,
            20,
            30,
            undefined,
            false,
          )}
        </View>
      ) : (
        <View style={styles.flexRow1}>
          <TouchableOpacity onPress={() => console.log('hello')}>
            <Animated.View>
              <Icon
                name="minus-circle"
                type="font-awesome-5"
                color={Colors.standard}
              />
            </Animated.View>
          </TouchableOpacity>
          <Animated.View style={itemWidth(50)}>
            <Animated.Text
              style={[
                textStyle(Colors.standard, 20, '500'),
                styles.textCenter,
              ]}>
              {item.quantity}
            </Animated.Text>
          </Animated.View>

          <TouchableOpacity onPress={() => console.log('hello')}>
            <Animated.View>
              <Icon
                name="plus-circle"
                type="font-awesome-5"
                color={Colors.standard}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      );

    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} isHideMenuNav={true} />
        <View style={styles.container}>
          <View
            style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{uri: item.imgUrl}}
              style={{width: 200, height: 200}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.flex2}>
            <View style={styles.flexRow1}>
              <View style={{flex: 9}}>
                <Text style={[textStyle('#000', 22, '700'), styles.textLeft]}>
                  {item.name}
                </Text>
                <Text style={[textStyle('#000', 15, '400'), styles.textLeft]}>
                  {item.unit}
                </Text>
              </View>
              <View style={{flex: 3}}>
                <View style={styles.flex1}>
                  <Text
                    style={[textStyle('#000', 22, '600'), styles.textRight]}>
                    {`৳ ${item.price}`}
                  </Text>
                </View>
                <View style={styles.flex1}>{buttonBlock}</View>
              </View>
            </View>
          </View>
          <View style={styles.flex4}>
            <Text style={[textStyle('#000', 22, '600'), styles.textLeft]}>
              Discription
            </Text>
            <Text style={[textStyle('#000', 16, '600'), styles.textLeft]}>
              Discription Discription Discription Discription
            </Text>
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
