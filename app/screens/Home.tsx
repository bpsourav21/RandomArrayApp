import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {styles} from '../shared/globalStyles';
import {GlobalState, GlobalProps} from '../interfaces/RootInterface';
import ProductList from '../components/ProductList';
import {getAllProduct} from '../actions/productAction';
import {ProductDto} from '../interfaces/Product';

interface LocalProps extends GlobalProps {
  products: ProductDto[];
}

class Home extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getAllProduct());
  }
  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <Header {...this.props} />
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <ProductList {...this.props} data={this.props.products} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    products: state.Product.products,
  };
};

export default connect(mapStateToProps)(Home);
