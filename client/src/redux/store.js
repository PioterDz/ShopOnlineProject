import { createStore, combineReducers } from 'redux';

import products from './productRedux/productReducer';

// combine reducers
const rootReducer = combineReducers({
    products,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;