import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuList.scss';

const MenuList = () => (

    <ul className="MenuList">
        <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/faq" activeClassName="active">Faq</NavLink></li>
        <li><NavLink to="/rules" activeClassName="active">Regulamin</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
    </ul>

);

export default MenuList;