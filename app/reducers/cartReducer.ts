import _ from 'underscore';
import * as actions from '../actions/cartAction';
import {CartItemDto, Cart} from '../interfaces/ShppingCart';

const initialState: Cart = {
  cart: [],
};
const reducer = (avoState: Cart = initialState, action: any): Cart => {
  switch (action.type) {
    case actions.ADD_ITEM_ON_CART:
      const cartArr = avoState.cart;
      cartArr.push(action.payload.value);
      console.log('arr', cartArr);
      return _.assign(
        {},
        {
          cart: cartArr,
        },
      );
    case actions.REMOVE_ITEM_FROM_CART:
      return _.assign({}, avoState, {});

    default:
      return avoState;
  }
};

export default reducer;
