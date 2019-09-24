import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Badge } from 'reactstrap';


const SingleProduct = (props) => {

    const { product } = props;

    return (
        <div className="SingleProduct col-md-5">
            <Link to={'productpage/' + product.id}>
                { product.productState ? <Badge color="info"> { product.productState } </Badge> : <p className="hidden-text"></p> }
                <img alt="product" src={`./images/${product.img}`} />
                <p>{ product.name }</p>
                <p className="numbers">{ product.price } $</p>
            </Link>
        </div>
    );
}

SingleProduct.propTypes = {
    product: PropTypes.object.isRequired,
}
    

export default SingleProduct;