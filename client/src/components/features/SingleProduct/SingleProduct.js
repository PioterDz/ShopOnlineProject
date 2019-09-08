import React from 'react';
import { Link } from 'react-router-dom';

import './SingleProduct.scss';

const SingleProduct = (props) => {

    const { product } = props;

    return (
        <div className="SingleProduct col-6">
            <Link to={'productpage/' + product.id}>
                <p>{ product.name }</p>
                <p>{ product.price } $</p>
                <p>{ product.desc }</p>
            </Link>
        </div>
    );
}
    


export default SingleProduct;