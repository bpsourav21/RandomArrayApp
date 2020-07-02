import _ from 'underscore';
import * as actions from '../actions/contentAction';
import {ContentState} from '../interfaces/ContentState';

const initialState: ContentState = {
  Date: '',
};
const reducer = (
  avoState: ContentState = initialState,
  action: any,
): ContentState => {
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
