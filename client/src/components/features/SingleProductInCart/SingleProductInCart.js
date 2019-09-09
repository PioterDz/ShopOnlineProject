import React from 'react';
import { Link } from 'react-router-dom';

import Counter from '../../common/Counter/Counter';

const SingleProductInCart = (props) => {

    const { product, substractFromCounter, addToCounter, handleDeleteProduct } = props;

    return (
        <div className="SingleProductInCart bg-light">

            <Link to={'productpage/' + product.id}>
                <img alt="product" className="col-4" src={`./images/${product.img}`} />
            </Link>

            <div className="DescInCart col-4">
                <p>{ product.name }</p>
                <p>{ product.desc }</p>
            </div>

            <p className="col-2">{ product.price } $</p>

            <Counter product={product} substractFromCounter={substractFromCounter} addToCounter={addToCounter} deleteProduct={handleDeleteProduct} />

        </div>
    );

} 

export default SingleProductInCart;