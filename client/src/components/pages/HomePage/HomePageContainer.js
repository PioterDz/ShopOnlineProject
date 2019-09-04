import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productRedux/productReducer'

import HomePage from './HomePage';


const mapStateToProps = state => ({
    products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);