import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MenuList = (props) => {

    const { menuIsOpen } = props;
    
    return (
        <ul className={"MenuList d-lg-flex " + (menuIsOpen ? "MenuOpen" : "d-none")}>
            <li className={menuIsOpen ? "listMargin dropDown" : ""}><NavLink exact to="/" className="navlink" activeClassName="active">Home</NavLink></li>
            <li className={menuIsOpen ? "listMargin dropDown-d1" : ""}><NavLink exact to="/faq" className="navlink" activeClassName="active">Faq</NavLink></li>
            <li className={menuIsOpen ? "listMargin dropDown-d2" : ""}><NavLink exact to="/rules" className="navlink" activeClassName="active">Regulamin</NavLink></li>
            <li className={menuIsOpen ? "listMargin dropDown-d3" : ""}><NavLink exact to="/contact" className="navlink" activeClassName="active">Kontakt</NavLink></li>
        </ul>
    );
}

MenuList.propTypes = {
    menuIsOpen: PropTypes.bool.isRequired,
}

export default MenuList;