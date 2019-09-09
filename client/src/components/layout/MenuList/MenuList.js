import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuList = () => (

    <ul className="MenuList">
        <li><NavLink to="/home" className="navlink" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/faq" className="navlink" activeClassName="active">Faq</NavLink></li>
        <li><NavLink to="/rules" className="navlink" activeClassName="active">Regulamin</NavLink></li>
        <li><NavLink to="/contact" className="navlink" activeClassName="active">Kontakt</NavLink></li>
    </ul>

);

export default MenuList;