import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {Auth} from './Auth';
import {ContentState} from './ContentState';
import {Product} from './Product';
import {Cart} from './ShppingCart';

export interface ParamList extends ParamListBase {
  Home: undefined;
  Profile: undefined;
  ShoppingCart: undefined;
  ProductDetails: {id: string};
  Checkout: undefined;
  Login: undefined;
  OTP: undefined;
}

export interface GlobalProps {
  navigation: DrawerNavigationProp<ParamList, string>;
  route: RouteProp<ParamList, string>;
  dispatch: (action: any) => void;
}

export interface GlobalState {
  Auth: Auth;
  Content: ContentState;
  Product: Product;
  Cart: Cart;
}
