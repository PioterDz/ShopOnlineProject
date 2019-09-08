import React from 'react';

import SingleProduct from '../SingleProduct/SingleProduct';

class ProductsList extends React.Component {

    render() {

        const { products, currentPage, displayPerPage } = this.props;
        
        const arrayOfProducts = products.filter((elem, id) => (id >= displayPerPage * (currentPage - 1)) && (id <= (displayPerPage * currentPage) - 1));
        
        return (
            <div className="ProductsList col-8">
                <div className="row">
                    {arrayOfProducts.map((el, id) =>
                        <SingleProduct key={id} product={el} />
                    )}
                </div>
            </div>
        );
    }

}

export default ProductsList;