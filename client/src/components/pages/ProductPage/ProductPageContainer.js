import { connect } from 'react-redux';
import { getProducts, addToCart } from '../../../redux/productRedux/productReducer';

import ProductPage from './ProductPage';

const mapStateToProps = state => ({
    products: getProducts(state),
})

const mapDispatchToProps = dispatch => ({
    addToCart: payload => dispatch(addToCart(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);