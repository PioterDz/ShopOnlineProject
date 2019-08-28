import React from 'react';
import { Link } from 'react-router-dom';
import './MenuList.scss';

const MenuList = () => (

    <ul className="MenuList">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">Faq</Link></li>
        <li><Link to="/rules">Regulamin</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
    </ul>

);

export default MenuList;