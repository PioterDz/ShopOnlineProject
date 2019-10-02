import { connect } from 'react-redux';
import { getSingleProduct, addToCart, getCart, plusToCounter, calculatePrice, getRequest, resetRequest, loadSingleProductRequest } from '../../../redux/productRedux/productReducer';

import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    product: getSingleProduct(state),
    cart: getCart(state),
    request: getRequest(state)
})

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload)),
    plusToCounter: id => dispatch(plusToCounter(id)),
    calculatePrice: () => dispatch(calculatePrice()),
    resetRequest: () => dispatch(resetRequest()),
    loadProduct: (id) => dispatch(loadSingleProductRequest(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);