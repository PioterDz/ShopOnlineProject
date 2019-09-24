import React from 'react';
import { PropTypes } from 'prop-types';

import Alert from '../../common/Alert/Alert';
import LoadSpinner from '../../common/LoadSpinner/LoadSpinner';

class ProductPage extends React.Component {

    componentDidMount() {
        const { resetRequest, loadProduct } = this.props;
        resetRequest();
        loadProduct(this.props.match.params.id);
    }

    handleAddToCart = () => {
        const { addToCart, product, cart, plusToCounter, calculatePrice } = this.props;
        const match = this.props.match.params.id;
        const cartCheck = cart.filter(el => el.id === match);

        cartCheck.length === 0 ? addToCart(product[0]) : plusToCounter(match);
        calculatePrice();
    }


    render() {
        const { product, request } = this.props;

        if(request.pending || request.success === null) return <LoadSpinner />;
        else if(!request.pending && request.error !== null) return <Alert color='danger' children={request.error} />;
        else if(!request.pending && request.success && product.length === 0) return <Alert color='info' children='no products' />;
        else if(!request.pending && request.success && product.length > 0)
        return (
            <div className="ProductPage page">
                <img alt="product" src={`/images/${product[0].img}`} />
                <div className="ProductInfo">
                    <h2>{product[0].name}</h2>
                    <p className="text-secondary numbers">{product[0].price} $</p>
                    <p>{product[0].desc}</p>
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
    product: PropTypes.array,
    cart: PropTypes.array.isRequired,
    plusToCounter: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    loadProduct: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    resetRequest: PropTypes.func.isRequired
}

export default ProductPage;