import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {AuthState} from './AuthState';
import {ContentState} from './ContentState';

export interface ParamList extends ParamListBase {
  Home: undefined;
  Profile: undefined;
  Login: undefined;
  OTP: undefined;
}

export interface GlobalProps {
  navigation: DrawerNavigationProp<ParamList, string>;
  route: RouteProp<ParamList, string>;
  dispatch: (action: any) => void;
}

export interface GlobalState {
  Auth: AuthState;
  Content: ContentState;
}
