import initialState from '../initialState';


// ACTIONS 

export const PLUS_TO_COUNTER = 'PLUS_TO_COUNTER';
export const MINUS_TO_COUNTER = 'MINUS_TO_COUNTER';
export const SORT = 'SORT';
export const PAGE_CHANGE = 'PAGE_CHANGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const MAKE_DISCOUNT = 'MAKE_DISCOUNT';
export const CALCULATE_PRICE = 'CALCULATE_PRICE';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';


export const plusToCounter = id => ({ id, type: PLUS_TO_COUNTER });
export const minusToCounter = id => ({ id, type: MINUS_TO_COUNTER });
export const sort = payload => ({ payload, type: SORT });
export const pageChange = payload => ({ payload, type: PAGE_CHANGE });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART });
export const makeDiscount = () => ({ type: MAKE_DISCOUNT });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
export const changeModalState = () => ({ type: CHANGE_MODAL_STATE });

// SELECTORS

export const getProducts = product => product.data;
export const getProductsPerPage = product => product.displayPerPage;
export const currentPage = product => product.page;
export const getNumberOfPages = product => Math.ceil(product.data.length / product.displayPerPage);
export const getCart = product => product.cart;
export const getTotalPrice = product => product.totalPrice;
export const getModalState = product => product.modal;
export const getDiscountCode = product => product.discountCode;
export const getDiscountStatus = product => product.discountIsActive;

// REDUCER 


export default function productReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:

      const productToAdd = action.payload;
      productToAdd.countNumber += 1;

      return {
        ...state, cart: state.cart.concat(productToAdd)
      }

    case DELETE_FROM_CART:

      const filteredCart = state.cart.filter(el => el.id !== action.payload);

      return {
        ...state, cart: filteredCart
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

      const newCartPlus = state.cart.map(el => el.id === action.id ? productToPlus : el);

      return {
        ...state, cart: newCartPlus
      };
    case MINUS_TO_COUNTER:

        const productToMinus = state.cart.find(el => el.id === action.id);
        productToMinus.countNumber -= 1;

        const newCartMinus = state.cart.map(el => el.id === action.id ? productToMinus : el);
        
      return {
        ...state, cart: newCartMinus
      };
    case MAKE_DISCOUNT:

      return {
        ...state, discount: 0.8, discountIsActive: true
    }
    case CALCULATE_PRICE:

      let roundPrice;
      if(state.cart.length !== 0) {
        const allPrices = state.cart.map(el => el.price * el.countNumber);
        const sumPrices = state.discountIsActive ? allPrices.reduce((prev, curr) => prev + curr) * state.discount : allPrices.reduce((prev, curr) => prev + curr);
        roundPrice = parseFloat(sumPrices.toFixed(2));
      } else {
        roundPrice = 0;
      }

      return {
        ...state, totalPrice: roundPrice
      }
    case CHANGE_MODAL_STATE:

      return {
        ...state, modal: false
      }

    default:
      return state;
  }
};