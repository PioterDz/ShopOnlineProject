import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Counter from '../../common/Counter/Counter';

const SingleProductInCart = (props) => {

    const { product, substractFromCounter, addToCounter, handleDeleteProduct, toggleSwitch } = props;

    const arr = product.desc.split('');
    const lastIndex = arr.lastIndexOf(' ', 130);
    const newContent = product.desc.substr(0, lastIndex) + '...';

    return (
        <div className="SingleProductInCart bg-transparent my-4">

            <Link target="_blank" to={'productpage/' + product.id}>
                <img alt="product" className="col-md-7" src={`./images/${product.img}`} />
            </Link>

            <div className="DescInCart col-md-4">
                <h3>{ product.name }</h3>
                <p>{ newContent }</p>
            </div>

            <p className="col-md-2 numbers">$ { product.price }</p>

            <Counter toggleSwitch={toggleSwitch} product={product} substractFromCounter={substractFromCounter} addToCounter={addToCounter} deleteProduct={handleDeleteProduct} />

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