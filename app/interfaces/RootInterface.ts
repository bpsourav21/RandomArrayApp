import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp, ParamListBase} from '@react-navigation/native';

export interface ParamList extends ParamListBase {
  Home: undefined;
  Profile: undefined;
}

export interface GlobalProps {
  navigation: DrawerNavigationProp<ParamList, string>;
  route: RouteProp<ParamList, string>;
  dispatch: (action: any) => void;
}

export interface GlobalState {
  Content: any;
}
