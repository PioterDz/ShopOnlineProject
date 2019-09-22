import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { saveState, loadState } from './localSession';
import productReducer from './productRedux/productReducer';
// import thunkReducer from './productRedux/thunkReducer';

// const rootReducer = combineReducers({
//     productReducer,
//     thunkReducer
// });

const persistedStore = loadState();

const store = createStore(productReducer, persistedStore, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


store.subscribe(() => {
    saveState(store.getState());
});


export default store;