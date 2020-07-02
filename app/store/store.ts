// IMPORT REDUX COMPONENTS
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
//import injectTapEventPlugin = require('react-tap-event-plugin');
import reducer from '../reducers';
// import AsyncStorage from '@react-native-community/async-storage';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// const store = createStore(
//   reducer,
//   {},
//   compose(applyMiddleware(thunkMiddleware, logger), autoRehydrate()),
// );

// begin periodically persisting the store
// persistStore(store, { blacklist: ['Purchasing', 'GroupedListProducts'] });
// persistStore(store, {storage: AsyncStorage, whitelist: []});

//injectTapEventPlugin();

export default store;
