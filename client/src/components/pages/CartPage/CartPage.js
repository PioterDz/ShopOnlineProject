import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';
import AnimateOnChange from 'react-animate-on-change';

import SingleProductInCart from '../../features/SingleProductInCart/SingleProductInCart';
import DiscountButton from '../../common/DiscountButton/DiscountButton';

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

    openInput = () => {
        const { openInput } = this.props;

        openInput();
    }

    makeToggleSwitch = (id) => {
        const { toggleSwitch } = this.props;

        toggleSwitch(id);
    }

    render() {
        const { cart, price, discountCode, discountStatus, discountInputStatus } = this.props;

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
                            toggleSwitch={this.makeToggleSwitch}
                        />) : <h1>Brak produktów w koszyku</h1> }
                </div>
                <div className="CartSummary">
                    <DiscountButton 
                        discountStatus={discountStatus} 
                        inputStatus={discountInputStatus} 
                        openInput={this.openInput} 
                        discountCode={discountCode} 
                        handleDiscountCode={this.handleDiscount} 
                    />
                    <AnimateOnChange 
                        baseClassName="totalPrice"
                        animationClassName="price-popup"
                        animate={price}
                    >
                        <h5 className="numbers">Total: $ {price}</h5>
                    </AnimateOnChange>
                </div>
                <button className="btn btn-dark btn-lg payBtn">Zapłać</button>
                
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
    discountInputStatus: PropTypes.bool.isRequired,
    openInput: PropTypes.func.isRequired,
    toggleSwitch: PropTypes.func.isRequired
}
    
export default CartPage;