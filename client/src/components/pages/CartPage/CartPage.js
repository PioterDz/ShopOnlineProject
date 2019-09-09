import React from 'react';
import uuid from 'uuidv4';

import SingleProductInCart from '../../features/SingleProductInCart/SingleProductInCart';
import Discount from '../../common/Discount/Discount';

class CartPage extends React.Component {

    handleDeleteProduct = (id) => {
        const { deleteFromCart } = this.props;
        deleteFromCart(id);
    }

    minusCounter = (number, id) => {
        this.props.substractFromCounter(number, id);
    }

    plusCounter = (number, id) => {
        this.props.addToCounter(number, id);
    }

    render() {
        const { cart, price } = this.props;

        return (
            <div className="CartPage">
                <h1>Koszyk</h1>
                <div className="ProductInCartDisplay">

                    {cart.length !== 0 ? cart.map(el => <SingleProductInCart
                    key={uuid()}
                    substractFromCounter={this.minusCounter}
                    addToCounter={this.plusCounter}
                    handleDeleteProduct={this.handleDeleteProduct}
                    product={el} />) : <h1>Brak produktów w koszyku</h1> }
                </div>
                <div className="CartSummary">
                    <Discount />
                    <h5>Total: $ {price}</h5>
                </div>
                <button className="btn btn-dark btn-lg">Zapłać</button>
            </div>
        );
    }
}
    
export default CartPage;