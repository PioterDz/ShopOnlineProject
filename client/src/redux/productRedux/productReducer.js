import initialState from '../initialState';


// // action name creator
// const reducerName = 'product';
// const createActionName = name => `app/${reducerName}/${name}`;

// ACTIONS 

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const loadProducts = () => ({ type: LOAD_PRODUCTS });

// SELECTORS

export const getProducts = ({ products }) => products.data;

// REDUCER 

export default function productReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state;
    default:
      return state;
  }
};