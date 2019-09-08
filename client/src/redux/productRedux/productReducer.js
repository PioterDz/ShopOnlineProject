import initialState from '../initialState';


// ACTIONS 

export const PLUS_TO_COUNTER = 'PLUS_TO_COUNTER';
export const MINUS_TO_COUNTER = 'MINUS_TO_COUNTER';
export const SORT = 'SORT';
export const PAGE_CHANGE = 'PAGE_CHANGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_TOTAL_PRICE = 'CHANGE_TOTAL_PRICE';

export const plusToCounter = () => ({ type: PLUS_TO_COUNTER });
export const minusToCounter = () => ({ type: MINUS_TO_COUNTER });
export const sort = payload => ({ payload, type: SORT });
export const pageChange = payload => ({ payload, type: PAGE_CHANGE });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const changeTotalPrice = payload => ({ payload, type: CHANGE_TOTAL_PRICE })

// SELECTORS

export const getCounter = product => product.number;
export const getProducts = product => product.data;
export const getProductsPerPage = product => product.displayPerPage;
export const currentPage = product => product.page;
export const getNumberOfPages = product => Math.ceil(product.data.length / product.displayPerPage);
export const getCart = product => product.cart;
export const getTotalPrice = product => product.totalPrice;

// REDUCER 

export default function productReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state, cart: [...action.payload]
      }
    case CHANGE_TOTAL_PRICE :
      return {
        ...state, totalPrice: state.totalPrice + action.payload
      }
    case PAGE_CHANGE:
      return {
        ...state, page: action.payload
      } 
    case SORT:
      return {
        ...state, data: [...action.payload]
      };
    case PLUS_TO_COUNTER:
      return {
        ...state, number: state.number + 1
      };
    case MINUS_TO_COUNTER:
      return {
        ...state, number: state.number - 1
      };
    default:
      return state;
  }
};