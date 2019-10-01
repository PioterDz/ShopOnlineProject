import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = (props) => {

    const { toggleMenu } = props;
    
    return (
        <div className="Logo">
            <FontAwesomeIcon icon="bars" className="Bar d-lg-none" size="2x" onClick={toggleMenu} />
            <Link className="Logo" to="/">
                <h1>bzdUrlop</h1>
                <p>bardzo zasłużenie dany</p>
            </Link>
        </div>  
    );
}

Logo.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}

export default Logo;