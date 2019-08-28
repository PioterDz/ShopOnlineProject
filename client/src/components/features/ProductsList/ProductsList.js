import React from 'react';

import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsList = () => (
    <div className="ProductsList col-8">
        <div className="row">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
        </div>
    </div>
);

export default ProductsList;