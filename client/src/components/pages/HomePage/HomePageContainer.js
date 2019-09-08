import { connect } from 'react-redux';
import { getProducts, sort, getProductsPerPage, currentPage, getNumberOfPages, pageChange } from '../../../redux/productRedux/productReducer'

import HomePage from './HomePage';


const mapStateToProps = state => ({
    products: getProducts(state),
    displayPerPage: getProductsPerPage(state),
    page: currentPage(state),
    numberOfPages: getNumberOfPages(state),
});

const mapDispatchToProps = dispatch => ({
    sort: (payload) => dispatch(sort(payload)),
    pageChange: (payload) => dispatch(pageChange(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);