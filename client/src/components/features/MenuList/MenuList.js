import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MenuList = (props) => {

    const { menuIsOpen } = props;
    
    return (
        <ul className={"MenuList d-lg-flex " + (menuIsOpen ? "MenuOpen" : "d-none")}>
            <li className={menuIsOpen ? "listMargin" : ""}><NavLink to="/home" className="navlink" activeClassName="active">Home</NavLink></li>
            <li className={menuIsOpen ? "listMargin" : ""}><NavLink to="/faq" className="navlink" activeClassName="active">Faq</NavLink></li>
            <li className={menuIsOpen ? "listMargin" : ""}><NavLink to="/rules" className="navlink" activeClassName="active">Regulamin</NavLink></li>
            <li className={menuIsOpen ? "listMargin" : ""}><NavLink to="/contact" className="navlink" activeClassName="active">Kontakt</NavLink></li>
        </ul>
    );
}

MenuList.propTypes = {
    menuIsOpen: PropTypes.bool.isRequired,
}

export default MenuList;