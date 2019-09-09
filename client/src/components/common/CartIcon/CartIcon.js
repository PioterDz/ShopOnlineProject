import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


const CartIcon = (props) => {

        return (
            <div className="CartIcon">
                <FontAwesomeIcon className="BagIcon" icon={faShoppingBasket} size="2x" />
                <FontAwesomeIcon className="CircleIcon" icon={faCircle} />
                <p>{props.numberOfProducts}</p>
            </div>
        );
}

export default CartIcon;


    


    
