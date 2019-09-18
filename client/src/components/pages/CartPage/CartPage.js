import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import { Button } from 'reactstrap';

import SingleProductInCart from '../../features/SingleProductInCart/SingleProductInCart';
import ModalInCart from '../../common/ModalInCart/ModalInCart';

class CartPage extends React.Component {

    handleDiscount = () => {
        const { makeDiscount, calculatePrice } = this.props;
        makeDiscount();
        calculatePrice();
    }


    handleDeleteProduct = (id) => {
        const { deleteFromCart, calculatePrice } = this.props;
        deleteFromCart(id);
        calculatePrice();
    }

    minusCounter = (product) => {
        const { substractFromCounter, calculatePrice } = this.props;
        product.countNumber === 1 ? void(0) : substractFromCounter(product.id);
        calculatePrice();
    }

    plusCounter = (id) => {
        const { addToCounter, calculatePrice } = this.props;
        addToCounter(id);
        calculatePrice();
    }

    render() {
        const { cart, price, discountCode, discountStatus } = this.props;


        return (

            <div className="CartPage page">

                <h1>Koszyk</h1>
                <div className="ProductInCartDisplay">

                    {cart.length !== 0 ? cart.map(el => 
                        <SingleProductInCart
                            key={uuid()}
                            substractFromCounter={this.minusCounter}
                            addToCounter={this.plusCounter}
                            handleDeleteProduct={this.handleDeleteProduct}
                            product={el}
                        />) : <h1>Brak produktów w koszyku</h1> }
                </div>
                <div className="CartSummary">
                    <ModalInCart 
                        toggleModal={this.handleToggleModal} 
                        buttonLabel={'kod rabatowy'}
                        discountStatus={discountStatus}
                        discountCode={discountCode}
                        handleDiscountCode={this.handleDiscount}
                    />
                    <Button color="success" className={"mt-4 " + (discountStatus ? 'd-block' : 'd-none')}>rabat aktywny</Button>
                    <h5 className="totalPrice numbers">Total: $ {price}</h5>
                </div>
                <button className="btn btn-dark btn-lg">Zapłać</button>
                
            </div>
        );
    }
}

CartPage.propTypes = {
    deleteFromCart: PropTypes.func.isRequired,
    substractFromCounter: PropTypes.func.isRequired,
    addToCounter: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountCode: PropTypes.string.isRequired,
    makeDiscount: PropTypes.func.isRequired,
    discountStatus: PropTypes.bool.isRequired,
    calculatePrice: PropTypes.func.isRequired,
}
    
export default CartPage;