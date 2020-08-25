import _ from 'underscore';
import * as actions from '../actions/productAction';
import {Product, ProductDto} from '../interfaces/Product';

const initialState: Product = {
  products: [],
};
const reducer = (avoState: Product = initialState, action: any): Product => {
  switch (action.type) {
    case actions.GET_ALL_PRODUCT_REQUEST:
      return _.assign({}, avoState, {});
    case actions.GET_ALL_PRODUCT_FAILURE:
      return _.assign({}, avoState, {});
    case actions.GET_ALL_PRODUCT_SUCCESS:
      return _.assign({}, avoState, {
        products: action.payload.value,
      });

    default:
      return avoState;
  }
};

export default reducer;
