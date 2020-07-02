import _ from 'underscore';
import * as actions from '../actions/authAction';
import {AuthState} from '../interfaces/AuthState';

const initialState: AuthState = {
  isAuthenticated: false,
};
const reducer = (
  avoState: AuthState = initialState,
  action: any,
): AuthState => {
  switch (action.type) {
    case actions.GET_LOGIN_REQUEST:
      return _.assign({}, avoState, {});
    case actions.GET_LOGIN_FAILURE:
      return _.assign({}, avoState, {});
    case actions.GET_LOGIN_SUCCESS:
      return _.assign({}, avoState, {
        isAuthenticated: action.payload.isAuthenticated,
      });
    case actions.GET_LOGOUT_REQUEST:
      return _.assign({}, avoState, {});
    case actions.GET_LOGOUT_FAILURE:
      return _.assign({}, avoState, {});
    case actions.GET_LOGOUT_SUCCESS:
      return _.assign({}, avoState, {
        isAuthenticated: action.payload.isAuthenticated,
      });

    default:
      return avoState;
  }
};

export default reducer;
