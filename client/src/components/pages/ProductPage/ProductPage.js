import React from 'react';
import { PropTypes } from 'prop-types';

class ProductPage extends React.Component {

    handleAddToCart = () => {
        const { addToCart, products, cart, plusToCounter, calculatePrice } = this.props;
        const match = this.props.match.params.id;
        const cartCheck = cart.filter(el => el.id === match);
        const filteredArray = products.filter(el => el.id === match);

        cartCheck.length === 0 ? addToCart(filteredArray[0]) : plusToCounter(match);
        calculatePrice();
    }


    render() {
        const { products } = this.props;
        const product = products.find(el => el.id === this.props.match.params.id);

        return (
            <div className="ProductPage page">
                <img alt="product" src={`/images/${product.img}`} />
                <div className="ProductInfo">
                    <h2>{product.name}</h2>
                    <p className="text-secondary numbers">{product.price} $</p>
                    <p>{product.desc}</p>
                    <span 
                        className="addToCartBtn"
                        variant="btn btn-lg" 
                        onClick={this.handleAddToCart}>
                        Dodaj do koszyka
                    </span>
                </div>
            </div>
        );
    }
}

ProductPage.propTypes = {
    products: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
    plusToCounter: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
}

export default ProductPage;