import React from 'react';

import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsList = (props) => {

    const { products } = props;
    
    return (
        <div className="ProductsList col-8">
            <div className="row">
                {products.map(el =>
                    <SingleProduct key={el.id} product={el} />
                )}
            </div>
        </div>
    )
}

export default ProductsList;