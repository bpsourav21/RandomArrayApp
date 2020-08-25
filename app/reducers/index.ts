import {combineReducers} from 'redux';
import Auth from './authReducer';
import Content from './contentReducer';
import Product from './productReducer';
import Cart from './cartReducer';
// import {GlobalState} from '../interfaces/RootInterface';
// ------------------------------------------------------------------
const reducer = combineReducers({
  Auth,
  Content,
  Product,
  Cart,
});

export default reducer;
