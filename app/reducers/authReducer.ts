import _ from 'underscore';
import * as actions from '../actions/authAction';
import {Auth} from '../interfaces/Auth';

const initialState: Auth = {
  isAuthenticated: false,
  token: '',
};
const reducer = (avoState: Auth = initialState, action: any): Auth => {
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

    case actions.GET_TOKEN_REQUEST:
      return _.assign({}, avoState, {});
    case actions.GET_TOKEN_FAILURE:
      return _.assign({}, avoState, {});
    case actions.GET_TOKEN_SUCCESS:
      return _.assign({}, avoState, {
        token: action.payload.value,
      });

    case actions.SET_TOKEN_REQUEST:
      return _.assign({}, avoState, {});
    case actions.SET_TOKEN_FAILURE:
      return _.assign({}, avoState, {
        token: action.payload.value,
      });
    case actions.SET_TOKEN_SUCCESS:
      return _.assign({}, avoState, {
        token: action.payload.value,
      });

    default:
      return avoState;
  }
};

export default reducer;
