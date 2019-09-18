import { createStore, /*combineReducers*/ } from 'redux';
import { saveState, loadState } from './localStorage';
import productReducer from './productRedux/productReducer';

// combine reducers
// const rootReducer = combineReducers({
//     productReducer,
// });

const persistedStore = loadState();
console.log(persistedStore, 'persistedstore');

const store = createStore(productReducer, persistedStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
    console.log(store.getState(), 'getstate');
    saveState(store.getState());
});


export default store;