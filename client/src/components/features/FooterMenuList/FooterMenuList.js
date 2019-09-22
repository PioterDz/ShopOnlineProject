import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterMenuList = () => (

    <ul className="MenuList FooterMenuList">
        <li><NavLink exact to="/" className="navlink">Home</NavLink></li>
        <li><NavLink exact to="/faq" className="navlink">Faq</NavLink></li>
        <li><NavLink exact to="/rules" className="navlink">Regulamin</NavLink></li>
        <li><NavLink exact to="/contact" className="navlink">Kontakt</NavLink></li>
    </ul>

);

export default FooterMenuList;