import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => (
    <div className="ContactPage">
        <h1>Kontakt</h1>

        <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
        <p>ul. Pięknych Snów 6</p>
        <p>00-001 Bajkowy Bród</p>

        <FontAwesomeIcon icon={faMobileAlt} size="2x" />
        <p>123456789</p>

        <FontAwesomeIcon icon={faAt} size="2x" />
        <p>bzd@urlop.pl</p>

        <h5>Pogadaj z nami przez</h5>
        <div className="social-com">
            <FontAwesomeIcon icon={faFacebookMessenger} size="2x" />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </div>
        
        <h5>Bądź z nami na bieżąco</h5>
        <div className="social-media">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>
    </div>
);
    
export default ContactPage;