import { connect } from 'react-redux';
import { getProducts, addToCart, getCart, plusToCounter, calculatePrice } from '../../../redux/productRedux/productReducer';

import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    products: getProducts(state),
    cart: getCart(state)
})

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload)),
    plusToCounter: id => dispatch(plusToCounter(id)),
    calculatePrice: () => dispatch(calculatePrice()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);