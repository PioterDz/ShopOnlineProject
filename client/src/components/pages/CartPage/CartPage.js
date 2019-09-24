import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';
import AnimateOnChange from 'react-animate-on-change';

import SingleProductInCart from '../../features/SingleProductInCart/SingleProductInCart';
import DiscountButton from '../../common/DiscountButton/DiscountButton';
import Pagination from '../../common/Pagination/Pagination';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

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

    onPageChange = (pageNumber) => {
        this.setState({ page: pageNumber });
    }

    render() {
        const { cart, price, discountCode, discountStatus, discountInputStatus, productsPerPage } = this.props;
        const { page } = this.state;

        const arrayOfProducts = cart.filter((elem, id) => (id >= productsPerPage * (page - 1)) && (id <= (productsPerPage * page) - 1));

        return (

            <div className="CartPage page">

                <h1 className="cartHeader">Koszyk</h1>
                <div className="ProductInCartDisplay">

                    {arrayOfProducts.length !== 0 ? arrayOfProducts.map(el => 
                        <SingleProductInCart
                            key={uuid()}
                            substractFromCounter={this.minusCounter}
                            addToCounter={this.plusCounter}
                            handleDeleteProduct={this.handleDeleteProduct}
                            product={el}
                        />) : <h1>Brak produktów w koszyku</h1> }
                </div>
                <Pagination 
                    onPageChange={this.onPageChange} 
                    currentPage={page} 
                    displayPerPage={productsPerPage} 
                    numberOfProducts={cart.length} 
                />
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
    productsPerPage: PropTypes.number.isRequired
}
    
export default CartPage;