import { connect } from 'react-redux';
import { getTotalPrice, getCart, getDiscountStatus, postCart, getOrderStatus } from '../../../redux/productRedux/productReducer';

import SummaryPage from './SummaryPage';

const mapStateToProps = state => ({
    price: getTotalPrice(state),
    cart: getCart(state),
    discountStatus: getDiscountStatus(state),
    orderStatus: getOrderStatus(state)
});

const mapDispatchToProps = dispatch => ({
    postCart: (cart, price) => dispatch(postCart(cart, price))
});


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);