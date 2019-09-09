import { connect } from 'react-redux';
import { getCart, getTotalPrice, plusToCounter, minusToCounter, deleteFromCart } from '../../../redux/productRedux/productReducer'

import CartPage from './CartPage';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
    addToCounter: (number, id) => dispatch(plusToCounter(number, id)),
    substractFromCounter: (number, id) => dispatch(minusToCounter(number, id)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);