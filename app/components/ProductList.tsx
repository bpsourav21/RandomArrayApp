import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, ActivityIndicator, Animated} from 'react-native';
import {styles, textStyle, itemWidth, itemHeight} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import {
  TouchableOpacity,
  FlatList,
  RectButton,
} from 'react-native-gesture-handler';
import {Image, Icon} from 'react-native-elements';
import {verticalSpacer, horizontalSpacer} from '../shared/Helpers';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Colors} from '../shared/Colors';
import {ProductDto} from '../interfaces/Product';
import {addItemOnCart} from '../actions/cartAction';

interface LocalProps extends GlobalProps {
  data: any;
  isSwipeable?: boolean;
}

class ProductList extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  private onAddButtonPress(item: ProductDto) {
    console.log('I am pressed', item);
    this.props.dispatch(addItemOnCart(item));
  }

  private renderProduct({item}: any) {
    const buttonBlock =
      item.quantity === 0 ? (
        <View style={[styles.flexRow1, {justifyContent: 'flex-end'}]}>
          <TouchableOpacity
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={() => this.onAddButtonPress(item)}>
            <Animated.View>
              <Icon
                name="plus-circle"
                type="font-awesome-5"
                color={Colors.standard}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.flexRow1}>
          <TouchableOpacity
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={() => this.onAddButtonPress(item)}>
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
              {/* {item.quantity} */}0
            </Animated.Text>
          </Animated.View>

          <TouchableOpacity
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
            onPress={() => this.onAddButtonPress(item)}>
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
      <View style={styles.productContatiner}>
        <View style={styles.flex2}>
          <Image
            source={{uri: item.ImgUrl}}
            style={{width: 65, height: 65}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={styles.flex7}>
          <View>
            <Text style={[textStyle('#000', 18, '600'), styles.textLeft]}>
              {item.Name}
            </Text>
            <Text style={[textStyle('#000', 15, '400'), styles.textLeft]}>
              {item.Unit}
            </Text>
          </View>
        </View>
        <View style={styles.flex3}>
          <View style={styles.flex1}>
            <Text style={[textStyle('#000', 22, '600'), styles.textRight]}>
              {`৳ ${item.Price}`}
            </Text>
          </View>
          <View style={styles.flex1}>{buttonBlock}</View>
        </View>
      </View>
    );
  }

  private renderRightActions = (progress: any, dragX: any) => {
    // const trans = dragX.interpolate({
    //   inputRange: [0, 10, 30, 101],
    //   outputRange: [-20, 0, 0, 1],
    // });
    return (
      <TouchableOpacity
        onPress={() => console.log('hello')}
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
        <Animated.View style={styles.swipeableRemove}>
          <Icon name="trash" type="font-awesome-5" color={Colors.standard} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  private renderSwipeable({item}: any) {
    return (
      <Swipeable renderRightActions={this.renderRightActions}>
        {this.renderProduct({item})}
      </Swipeable>
    );
  }

  private renderTouchable({item}: any) {
    return (
      <RectButton
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        style={styles.flex1}
        onPress={() =>
          this.props.navigation.navigate('ProductDetails', {id: item.name})
        }>
        {this.renderProduct({item})}
      </RectButton>
    );
  }
  render() {
    const isSwipeable = this.props.isSwipeable ? this.props.isSwipeable : false;
    return (
      <View>
        <FlatList
          //   style={styles.list}
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => {
            return verticalSpacer(5);
          }}
          renderItem={(item) =>
            isSwipeable
              ? this.renderSwipeable(item)
              : this.renderTouchable(item)
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {};
};

export default connect(mapStateToProps)(ProductList);
