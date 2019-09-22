import { connect } from 'react-redux';
import { getProducts, addToCart, getCart, plusToCounter, calculatePrice, getRequest, loadDataRequest, resetRequest } from '../../../redux/productRedux/productReducer';

import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    products: getProducts(state),
    cart: getCart(state),
    request: getRequest(state)
})

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload)),
    plusToCounter: id => dispatch(plusToCounter(id)),
    calculatePrice: () => dispatch(calculatePrice()),
    loadData: () => dispatch(loadDataRequest()),
    resetRequest: () => dispatch(resetRequest())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);