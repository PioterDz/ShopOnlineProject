import React from 'react';

import SingleProduct from '../../features/SingleProduct/SingleProduct';
import Counter from '../../common/Counter/Counter';
import Discount from '../../common/Discount/Discount';

import './CartPage.scss';

class CartPage extends React.Component {

    render() {
        const { cart, price, number, substractFromCounter, addToCounter } = this.props;

        return (
            <div className="CartPage">
                <h1>Koszyk</h1>
                <div className="ProductInCartDisplay">
                    <img alt="product" />
                    {cart.length !== 0 ? cart.map((el, id) => <SingleProduct className="ProductInCart" key={id} product={el} />) : <h1>Brak produktów w koszyku</h1> }
                    {cart.length !== 0 ? <Counter number={number} substractFromCounter={substractFromCounter} addToCounter={addToCounter} /> : ''}
                </div>
                <div className="CartSummary">
                    <Discount />
                    <h5>Total: {price} $</h5>
                    <button className="btn btn-dark btn-lg">Zapłać</button>
                </div>
            </div>
        );
    }
}
    
export default CartPage;