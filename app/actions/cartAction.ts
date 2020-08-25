import _ from 'underscore';
import {ProductDto} from '../interfaces/Product';
import {CartItemDto} from 'app/interfaces/ShppingCart';

export const ADD_ITEM_ON_CART = 'ADD_ITEM_ON_CART';
export function addItemOnCart(item: ProductDto) {
  return (dispatch: any) => {
    var cartItem: CartItemDto = {
      Product: item,
      Quantity: 1,
    };
    dispatch({
      type: ADD_ITEM_ON_CART,
      payload: {value: cartItem},
    });
  };
}

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export function removeItemFromCart(item: ProductDto) {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {value: item},
    });
  };
}

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export function increaseQuantity(item: ProductDto) {
  return (dispatch: any) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: {value: item},
    });
  };
}

export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export function decreaseQuantity(item: ProductDto) {
  return (dispatch: any) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: {value: item},
    });
  };
}
