import { createStore, combineReducers } from 'redux';

import productReducer from './productRedux/productReducer';

// combine reducers
// const rootReducer = combineReducers({
//     productReducer,
// });

const store = createStore(productReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;