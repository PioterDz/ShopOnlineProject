import React from 'react';

class ProductPage extends React.Component {

    handleAddToCart = () => {
        const { addToCart, products } = this.props;
        
        const filteredArray = products.filter(el => el.id === this.props.match.params.id);
        addToCart(filteredArray);
    }

    render() {
        const { products } = this.props;
        const product = products.find(el => el.id === this.props.match.params.id);

        return (
            <div className="ProductPage">
                <img alt="Product" />
                <div className="ProductInfo">
                    <h2>{product.name}</h2>
                    <p className="text-secondary">{product.price} $</p>
                    <p>{product.desc}</p>
                    <button 
                        className="addToCartBtn"
                        variant="btn btn-lg" 
                        onClick={this.handleAddToCart}>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        );
    }

}

export default ProductPage;