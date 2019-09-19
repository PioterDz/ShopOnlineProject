import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterMenuList = () => (

    <ul className="MenuList FooterMenuList">
        <li><NavLink to="/home" className="navlink">Home</NavLink></li>
        <li><NavLink to="/faq" className="navlink">Faq</NavLink></li>
        <li><NavLink to="/rules" className="navlink">Regulamin</NavLink></li>
        <li><NavLink to="/contact" className="navlink">Kontakt</NavLink></li>
    </ul>

);

export default FooterMenuList;