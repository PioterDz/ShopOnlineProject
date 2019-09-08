import { connect } from 'react-redux';
import { getCart, getTotalPrice, getCounter, plusToCounter, minusToCounter } from '../../../redux/productRedux/productReducer'

import CartPage from './CartPage';

const mapStateToProps = state => ({
    cart: getCart(state),
    price: getTotalPrice(state),
    number: getCounter(state),
});

const mapDispatchToProps = dispatch => ({
    addToCounter: () => dispatch(plusToCounter()),
    substractFromCounter: () => dispatch(minusToCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);