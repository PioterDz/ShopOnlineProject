import React from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimateOnChange from 'react-animate-on-change';

const CartIcon = (props) => {

        return (
            <div className="CartIcon">
                <FontAwesomeIcon className="BagIcon" icon="shopping-basket" size="2x" />
                {props.numberOfProducts > 0 ?
                <AnimateOnChange 
                    baseClassName="BagCircle"
                    animationClassName="bag-popup"
                    animate={props.numberOfProducts}
                >
                    <FontAwesomeIcon className="CircleIcon" icon={['far', 'circle']} />
                    <p className={props.numberOfProducts >= 10 ? "numbers numberInCart changePosition" : "numbers numberInCart"}>{props.numberOfProducts}</p>
                </AnimateOnChange> : ''}
            </div>
        );
}

CartIcon.propTypes = {
    numberOfProducts: PropTypes.number.isRequired,
};

export default CartIcon;


    


    
