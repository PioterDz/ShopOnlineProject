import React from 'react';
import uuid from 'uuidv4';

import SingleProduct from '../SingleProduct/SingleProduct';


class ProductsList extends React.Component {

    render() {

        const { products, currentPage, displayPerPage } = this.props;
        
        const arrayOfProducts = products.filter((elem, id) => (id >= displayPerPage * (currentPage - 1)) && (id <= (displayPerPage * currentPage) - 1));
        
        return (
            <div className="ProductsList col-8 d-flex align-items-center">
                <div className="row">

                        {arrayOfProducts.map(el =>
                            <SingleProduct key={uuid()} product={el} />
                        )}

                </div>
            </div>
        );
    }

}

export default ProductsList;