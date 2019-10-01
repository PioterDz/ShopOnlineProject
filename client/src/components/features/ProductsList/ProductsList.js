import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import SingleProduct from '../SingleProduct/SingleProduct';
import LoadSpinner from '../../common/LoadSpinner/LoadSpinner';
import Alert from '../../common/Alert/Alert';


class ProductsList extends React.Component {

    render() {

        const { products, currentPage, displayPerPage, request } = this.props;
        
        const arrayOfProducts = products.filter((elem, id) => (id >= displayPerPage * (currentPage - 1)) && (id <= (displayPerPage * currentPage) - 1));
        
        if(request.pending || request.success === null) return <LoadSpinner />;
        else if(!request.pending && request.error !== null) return <Alert color='danger' children={request.error} />;
        else if(!request.pending && request.success && products.length === 0) return <Alert color='info' children='no products' />;
        else if(!request.pending && request.success && products.length > 0)
        return (
            <div className="ProductsList">
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
    request: PropTypes.object.isRequired,
    currentPage: PropTypes.number.isRequired,
    displayPerPage: PropTypes.number.isRequired,
}

export default ProductsList;