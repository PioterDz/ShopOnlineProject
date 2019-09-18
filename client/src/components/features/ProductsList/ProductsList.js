import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import SingleProduct from '../SingleProduct/SingleProduct';


class ProductsList extends React.Component {

    render() {

        const { products, currentPage, displayPerPage } = this.props;
        
        const arrayOfProducts = products.filter((elem, id) => (id >= displayPerPage * (currentPage - 1)) && (id <= (displayPerPage * currentPage) - 1));
        
        return (
            <div className="ProductsList col-md-8">
                <div className="row">

                        {arrayOfProducts.map(el =>
                            <SingleProduct key={uuid()} product={el} />
                        )}

                </div>
            </div>
        );
    }
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    displayPerPage: PropTypes.number.isRequired,
}

export default ProductsList;