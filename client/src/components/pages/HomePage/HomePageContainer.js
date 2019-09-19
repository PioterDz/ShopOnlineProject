import { connect } from 'react-redux';
import { getProducts, getProductsPerPage, currentPage, getNumberOfPages, pageChange, getModalState, changeModalState, sortBy, getSortDirection } from '../../../redux/productRedux/productReducer'

import HomePage from './HomePage';


const mapStateToProps = state => ({
    products: getProducts(state),
    displayPerPage: getProductsPerPage(state),
    page: currentPage(state),
    numberOfPages: getNumberOfPages(state),
    modal: getModalState(state),
    sortDirection: getSortDirection(state)
});

const mapDispatchToProps = dispatch => ({
    pageChange: (payload) => dispatch(pageChange(payload)),
    changeModal: () => dispatch(changeModalState()),
    sortBy: (key) => dispatch(sortBy(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);