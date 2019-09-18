import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage = () => (
    <div className="ContactPage page">
        <h1>Kontakt</h1>

        <FontAwesomeIcon className="inContactIcon" icon="map-marked-alt" size="2x" />
        <p>ul. Pięknych Snów 6</p>
        <p>00-001 Bajkowy Bród</p>

        <FontAwesomeIcon className="inContactIcon" icon="mobile-alt" size="2x" />
        <p>123456789</p>

        <FontAwesomeIcon className="inContactIcon" icon="at" size="2x" />
        <p>bzd@urlop.pl</p>

        <div className="socialContact">
            <h5>Pogadaj z nami przez</h5>
            <div className="social-com">
                <FontAwesomeIcon className="inContactIcon" icon={['fab', 'facebook-messenger']} size="2x" />
                <FontAwesomeIcon className="inContactIcon" icon={['fab', 'whatsapp']} size="2x" />
            </div>
            
            <h5>Bądź z nami na bieżąco</h5>
            <div className="social-media">
                <FontAwesomeIcon className="inContactIcon" icon={['fab', 'facebook']} size="2x" />
                <FontAwesomeIcon className="inContactIcon" icon={['fab', 'instagram']} size="2x" />
                <FontAwesomeIcon className="inContactIcon" icon={['fab', 'youtube']} size="2x" />
            </div>
        </div>
        
    </div>
);
    
export default ContactPage;