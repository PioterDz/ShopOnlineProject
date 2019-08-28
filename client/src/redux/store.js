import { createStore, combineReducers } from 'redux';

import productReducer from './productRedux/productReducer';

// combine reducers
const rootReducer = combineReducers({
    productReducer,
});

const store = createStore(rootReducer);

export default store;