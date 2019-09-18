import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Counter from '../../common/Counter/Counter';

const SingleProductInCart = (props) => {

    const { product, substractFromCounter, addToCounter, handleDeleteProduct } = props;

    const arr = product.desc.split('');
    const lastIndex = arr.lastIndexOf(' ', 130);
    const newContent = product.desc.substr(0, lastIndex) + '...';

    return (
        <div className="SingleProductInCart bg-light my-4">

            <Link to={'productpage/' + product.id}>
                <img alt="product" className="col-7" src={`./images/${product.img}`} />
            </Link>

            <div className="DescInCart col-4">
                <h3>{ product.name }</h3>
                <p>{ newContent }</p>
            </div>

            <p className="col-2 numbers">$ { product.price }</p>

            <Counter product={product} substractFromCounter={substractFromCounter} addToCounter={addToCounter} deleteProduct={handleDeleteProduct} />

        </div>
    );
} 

SingleProductInCart.propTypes = {
    product: PropTypes.object.isRequired,
    substractFromCounter: PropTypes.func.isRequired,
    addToCounter: PropTypes.func.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired,
}

export default SingleProductInCart;