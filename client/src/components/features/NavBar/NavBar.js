import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Logo from '../../common/Logo/Logo';
import MenuList from '../MenuList/MenuList';
import CartIcon from '../../common/CartIcon/CartIcon';


const NavBar = (props) => {

    const { cart, menuIsOpen, toggleMenu } = props;

    return (
        <nav className={"NavBar page " + (menuIsOpen ? "navMargin" : "")}>
            <Logo toggleMenu={toggleMenu} />
            <MenuList menuIsOpen={menuIsOpen} />
            <NavLink to="/cart" activeClassName="active">
                <CartIcon numberOfProducts={cart.length} />
            </NavLink>
        </nav>
    );
}

NavBar.propTypes = {
    cart: PropTypes.array.isRequired,
    menuIsOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
}


export default NavBar;
