import React from 'react';
import { Link } from 'react-router-dom';


const SingleProduct = (props) => {

    const { product } = props;

    return (
        <div className="SingleProduct col-5 bg-light">
            <Link to={'productpage/' + product.id}>
                { product.productState ? <p> { product.productState } </p> : '' }
                <img alt="product" src={`./images/${product.img}`} />
                <p>{ product.name }</p>
                <p>{ product.price } $</p>
            </Link>
        </div>
    );
}
    


export default SingleProduct;