import React from 'react';
import { PropTypes } from 'prop-types';

import Alert from '../../common/Alert/Alert';
import LoadSpinner from '../../common/LoadSpinner/LoadSpinner';

class ProductPage extends React.Component {

    componentDidMount() {
        const { resetRequest, loadData } = this.props;
        resetRequest();
        loadData();
    }

    handleAddToCart = () => {
        const { addToCart, products, cart, plusToCounter, calculatePrice } = this.props;
        const match = this.props.match.params.id;
        const cartCheck = cart.filter(el => el.id === match);
        const filteredArray = products.filter(el => el.id === match);

        cartCheck.length === 0 ? addToCart(filteredArray[0]) : plusToCounter(match);
        calculatePrice();
    }


    render() {
        const { products, request } = this.props;
        const product = products.find(el => el.id === this.props.match.params.id);

        if(request.pending || request.success === null) return <LoadSpinner />;
        else if(!request.pending && request.error !== null) return <Alert color='error' children={request.error} />;
        else if(!request.pending && request.success && products.length === 0) return <Alert color='info' children='no products' />;
        else if(!request.pending && request.success && products.length > 0)
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
    loadData: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    resetRequest: PropTypes.func.isRequired
}

export default ProductPage;