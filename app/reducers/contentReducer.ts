import _ from 'underscore';
import * as actions from '../actions/contentAction';

interface CustomState {
  Date: string;
}

export const initialState: CustomState = {
  Date: '',
};
const reducer = (avoState: CustomState = initialState, action) => {
  switch (action.type) {
    case actions.GET_TYPE_REQUEST:
      return _.assign({}, avoState, {});
    case actions.GET_TYPE_FAILURE:
      return _.assign({}, avoState, {});
    case actions.GET_TYPE_SUCCESS:
      return _.assign({}, avoState, {});
    case actions.INCREMENT:
      return _.assign({}, avoState, {
        Date: action.payload.value,
      });

    default:
      return avoState;
  }
};

export default reducer;
