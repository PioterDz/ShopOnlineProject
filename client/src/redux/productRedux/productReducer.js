import initialState from '../initialState';
import axios from 'axios';
import { API_URL } from '../config';

// ACTIONS 

export const LOAD_DATA = 'LOAD_DATA';
export const START_REQUEST = 'START_REQUEST';
export const END_REQUEST = 'END_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';
export const RESET_REQUEST = 'RESET_REQUEST';
export const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
export const LOAD_PRODUCTS_BY_PAGE = 'LOAD_PRODUCTS_BY_PAGE';

export const PLUS_TO_COUNTER = 'PLUS_TO_COUNTER';
export const MINUS_TO_COUNTER = 'MINUS_TO_COUNTER';
export const SORT_BY = 'SORT_BY';
// export const PAGE_CHANGE = 'PAGE_CHANGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const MAKE_DISCOUNT = 'MAKE_DISCOUNT';
export const CALCULATE_PRICE = 'CALCULATE_PRICE';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const OPEN_DISCOUNT_INPUT = 'OPEN_DISCOUNT_INPUT';
export const SEARCH = 'SEARCH';

// ACITON CREATORS

export const loadData = payload => ({ payload, type: LOAD_DATA });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });

export const plusToCounter = id => ({ id, type: PLUS_TO_COUNTER });
export const minusToCounter = id => ({ id, type: MINUS_TO_COUNTER });
export const sortBy = key => ({ key, type: SORT_BY });
// export const pageChange = payload => ({ payload, type: PAGE_CHANGE });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART });
export const makeDiscount = () => ({ type: MAKE_DISCOUNT });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
export const changeModalState = () => ({ type: CHANGE_MODAL_STATE });
export const toggleMenu = () => ({ type: TOGGLE_MENU });
export const openDiscountInput = () => ({ type: OPEN_DISCOUNT_INPUT });
export const search = input => ({ input, type: SEARCH });

// SELECTORS

export const getProducts = product => product.data;
export const getCurrentDisplay = product => product.currentDisplay;
export const getSingleProduct = product => product.singleProduct;
export const getProductsPerPage = product => product.displayPerPage;
// export const currentPage = product => product.page;
export const getCart = product => product.cart;
export const getTotalPrice = product => product.totalPrice;
export const getModalState = product => product.modal;
export const getDiscountCode = product => product.discountCode;
export const getDiscountStatus = product => product.discountIsActive;
export const getMenuState = product => product.menuIsOpen;
export const getSortDirection = product => product.sortDirection;
export const getDiscountInputStatus = product => product.discountInput;
export const getRequest = product => product.request;


// THUNK

export const loadDataRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/data`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadData(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadSingleProductRequest = (id) => {
  return async dispatch => {

      dispatch(startRequest());
      try {
          let res = await axios.get(`${API_URL}/data/${id}`);
          await new Promise((resolve, reject) => setTimeout(resolve, 2000));
          await dispatch(loadSingleProduct(res.data));
          dispatch(endRequest());
      } catch(e) {
          dispatch(errorRequest(e.message));
      }
  }
};




// REDUCER 


export default function productReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_DATA:

      return { ...state, data: action.payload, currentDisplay: action.payload };
    case START_REQUEST:

      return { ...state, data: [], singleProduct: [], request: { pending: true, error: null, success: null } };
    case END_REQUEST:

      return { ...state, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:

      return { ...state, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      
      return {...state, request: { pending: false, error: null, success: null } };
    case LOAD_SINGLE_PRODUCT:

      return { ...state, singleProduct: action.payload };

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
    // case PAGE_CHANGE:

    //   return {
    //     ...state, page: action.payload
    //   } 
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
        const allPrices = state.cart.map(el => el.food ? el.price * el.countNumber * 1.1 : el.price * el.countNumber);
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
    case TOGGLE_MENU:
      const menuState = !state.menuIsOpen;

      return {
        ...state, menuIsOpen: menuState
      }
    
    case SORT_BY:
      let newData;
      if(action.key === 'asc' || action.key === 'desc') {
        newData = state.data.sort((a, b) => action.key === 'asc' ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price));
      } else if(action.key === 'AtoZ') {
        newData = state.data.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1);
      } else if(action.key === 'ZtoA') {
        newData = state.data.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1);
      }

      return {
        ...state, data: newData, sortDirection: action.key
      }

    case OPEN_DISCOUNT_INPUT:

      return {
        ...state, discountInput: true
      }

    case SEARCH: 
      const filteredBySearch = state.data.filter(el => el.name.toLowerCase().indexOf(action.input.toLowerCase()) !== -1);

      return {
        ...state, currentDisplay: filteredBySearch
      }

    default:
      return state;
  }
};