import { connect } from 'react-redux';
import { getCart, toggleMenu, getMenuState } from '../../../redux/productRedux/productReducer';

import NavBar from './NavBar';

const mapStateToProps = state => ({
    cart: getCart(state),
    menuIsOpen: getMenuState(state),
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);