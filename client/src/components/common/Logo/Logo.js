import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
    <Link className="Logo" to="/">
        <FontAwesomeIcon icon={faUmbrellaBeach} size="3x" />
        <h1>ZaplanujMiUrlop</h1>
    </Link>
);

export default Logo;