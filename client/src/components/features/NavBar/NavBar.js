import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/productRedux/productReducer'

import Logo from '../../common/Logo/Logo';
import MenuList from '../../layout/MenuList/MenuList';
import CartIcon from '../../common/CartIcon/CartIcon';

const NavBar = (props) => (
    <nav className="NavBar">
        <Logo />
        <MenuList />
        <NavLink to="/cart" activeClassName="active">
            <CartIcon numberOfProducts={props.cart.length} />
        </NavLink>
    </nav>
);

const mapStateToProps = state => ({
    cart: getCart(state),
});


export default connect(mapStateToProps, null)(NavBar);
