import { connect } from 'react-redux';
import { getTotalPrice, getCart, getDiscountStatus } from '../../../redux/productRedux/productReducer';

import SummaryPage from './SummaryPage';

const mapStateToProps = state => ({
    price: getTotalPrice(state),
    cart: getCart(state),
    discountStatus: getDiscountStatus(state),
});

// const mapDispatchToProps = dispatch => ({

// });


export default connect(mapStateToProps, null)(SummaryPage);