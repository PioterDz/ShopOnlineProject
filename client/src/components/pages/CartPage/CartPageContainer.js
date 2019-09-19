import { connect } from 'react-redux';
import { getCart, getTotalPrice, plusToCounter, minusToCounter, deleteFromCart, getDiscountCode, makeDiscount, getDiscountStatus, 
    calculatePrice, getDiscountInputStatus, openDiscountInput } from '../../../redux/productRedux/productReducer'

import CartPage from './CartPage';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
    discountCode: getDiscountCode(state),
    discountStatus: getDiscountStatus(state),
    discountInputStatus: getDiscountInputStatus(state),
});

const mapDispatchToProps = dispatch => ({
    addToCounter: (id) => dispatch(plusToCounter(id)),
    substractFromCounter: (id) => dispatch(minusToCounter(id)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    makeDiscount: () => dispatch(makeDiscount()),
    calculatePrice: () => dispatch(calculatePrice()),
    openInput: () => dispatch(openDiscountInput())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);