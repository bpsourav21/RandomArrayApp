// IMPORT REDUX COMPONENTS
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
//import injectTapEventPlugin = require('react-tap-event-plugin');
import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// begin periodically persisting the store
// persistStore(store, { blacklist: ['Purchasing', 'GroupedListProducts'] });

//injectTapEventPlugin();

export default store;
