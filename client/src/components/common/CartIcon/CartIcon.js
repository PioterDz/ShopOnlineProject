import React from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartIcon = (props) => {

        return (
            <div className="CartIcon">
                <FontAwesomeIcon className="BagIcon" icon="shopping-basket" size="2x" />
                {props.numberOfProducts > 0 ? 
                <div className="BagCircle">
                    <FontAwesomeIcon className="CircleIcon" icon={['far', 'circle']} />
                    <p className={props.numberOfProducts >= 10 ? "numbers changePosition" : "numbers"}>{props.numberOfProducts}</p>
                </div> : ''}
            </div>
        );
}

CartIcon.propTypes = {
    numberOfProducts: PropTypes.number.isRequired,
};

export default CartIcon;


    


    
