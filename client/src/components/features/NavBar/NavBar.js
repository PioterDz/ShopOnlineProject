import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import MenuList from '../../layout/MenuList/MenuList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


import './NavBar.scss';

const NavBar = () => (
    <nav className="NavBar">
        <Logo />
        <MenuList />
        <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} size="2x" /></Link>
    </nav>
);
    
export default NavBar;