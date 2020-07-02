import {combineReducers} from 'redux';
import Auth from './authReducer';
import Content from './contentReducer';
// import {GlobalState} from '../interfaces/RootInterface';
// ------------------------------------------------------------------
const reducer = combineReducers({
  Auth,
  Content,
});

export default reducer;
