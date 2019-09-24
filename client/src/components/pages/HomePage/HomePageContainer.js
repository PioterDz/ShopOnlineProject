import { connect } from 'react-redux';
import { getCurrentDisplay, getRequest, loadDataRequest, resetRequest, getProductsPerPage, getModalState, changeModalState, sortBy, getSortDirection, 
        getDiscountCode, search } from '../../../redux/productRedux/productReducer';

import HomePage from './HomePage';


const mapStateToProps = state => ({
    products: getCurrentDisplay(state),
    displayPerPage: getProductsPerPage(state),
    modal: getModalState(state),
    sortDirection: getSortDirection(state),
    request: getRequest(state),
    discountCode: getDiscountCode(state),
});

const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(loadDataRequest()),
    changeModal: () => dispatch(changeModalState()),
    sortBy: key => dispatch(sortBy(key)),
    resetRequest: () => dispatch(resetRequest()),
    search: input => dispatch(search(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);