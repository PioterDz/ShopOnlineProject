import { connect } from 'react-redux';
import { getProducts, addToCart, changeTotalPrice } from '../../../redux/productRedux/productReducer';

import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    products: getProducts(state),
})

const mapDispatchToProps = dispatch => ({
    addToCart: (payload) => dispatch(addToCart(payload)),
    changeTotalPrice: (payload) => dispatch(changeTotalPrice(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);