import React from 'react';

import './ProductPage.scss';

class ProductPage extends React.Component {

    handleAddToCart = (paramId) => {
        const { addToCart, products } = this.props;
        
        const filteredArray = products.filter(el => el.id === paramId);
        addToCart(filteredArray);
    }

    handleTotalPriceChange = (paramId) => {
        const { changeTotalPrice, products } = this.props;
        
        const filteredArray = products.find(el => el.id === paramId); 
        changeTotalPrice(parseInt(filteredArray.price));
    }

    render() {
        const { products } = this.props;
        const paramsId = this.props.match.params.id;
        const product = products.find(el => el.id === paramsId);

        return (
            <div className="ProductPage">
                <img alt="Product" />
                <div className="Product-info">
                    <h2>{product.name}</h2>
                    <p>{product.price} $</p>
                    <p>{product.desc}</p>
                    <button 
                        className="btn btn-dark btn-lg" 
                        onClick={(e) => {
                            this.handleAddToCart(paramsId); 
                            this.handleTotalPriceChange(paramsId);
                        }}>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        );
    }

}

export default ProductPage;