import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { saveState, loadState } from './localStorage';
import productReducer from './productRedux/productReducer';


const persistedStore = loadState();

const store = createStore(productReducer, persistedStore, compose(
    applyMiddleware(thunk),
));


store.subscribe(() => {
    saveState(store.getState());
});


export default store;