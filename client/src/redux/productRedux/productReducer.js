import initialState from '../initialState';


// ACTIONS 

export const PLUS_TO_COUNTER = 'PLUS_TO_COUNTER';
export const MINUS_TO_COUNTER = 'MINUS_TO_COUNTER';
export const SORT = 'SORT';
export const PAGE_CHANGE = 'PAGE_CHANGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const plusToCounter = (number, id) => ({ number, id, type: PLUS_TO_COUNTER });
export const minusToCounter = (number, id) => ({ number, id, type: MINUS_TO_COUNTER });
export const sort = payload => ({ payload, type: SORT });
export const pageChange = payload => ({ payload, type: PAGE_CHANGE });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART });

// SELECTORS

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

      const productToAdd = action.payload;
      productToAdd[0].countNumber = 1;
      const priceOfProductToAdd = parseInt(productToAdd[0].price);

      return {
        ...state, cart: state.cart.concat(productToAdd), totalPrice: state.totalPrice + priceOfProductToAdd
      }
    case DELETE_FROM_CART:

      const filteredCart = state.cart.filter(el => el.id !== action.payload);
      const productToDel = state.cart.find(el => el.id === action.payload);
      const priceOfProductToDel = parseInt(productToDel.price);

      return {
        ...state, cart: filteredCart, totalPrice: state.totalPrice - priceOfProductToDel
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

      const productToPlus = state.cart.find(el => el.id === action.id);
      productToPlus.countNumber += 1;
      const priceForPlus = parseInt(productToPlus.price);
      const prevCartPlus = state.cart;
      const newCartPlus = prevCartPlus.map(el => el.id === action.id ? el = productToPlus : el);

      return {
        ...state, cart: newCartPlus, totalPrice: state.totalPrice + priceForPlus
      };
    case MINUS_TO_COUNTER:

        const productToMinus = state.cart.find(el => el.id === action.id);
        productToMinus.countNumber -= 1;
        const priceForMinus = parseInt(productToMinus.price);
        const prevCartMinus = state.cart;
        const newCartMinus = prevCartMinus.map(el => el.id === action.id ? el = productToMinus : el);
        
      return {
        ...state, cart: newCartMinus, totalPrice: state.totalPrice - priceForMinus
      };
    default:
      return state;
  }
};