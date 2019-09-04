import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import MenuList from '../../layout/MenuList/MenuList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import './NavBar.scss';

const NavBar = () => (
    <nav className="NavBar">
        <Logo />
        <MenuList />
        <NavLink to="/cart" activeClassName="active"><FontAwesomeIcon icon={faShoppingBag} size="2x" /></NavLink>
    </nav>
);
    
export default NavBar;