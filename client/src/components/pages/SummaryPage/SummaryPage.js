import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import uuid from 'uuidv4';

class SummaryPage extends React.Component {

    handleOrder = () => {
        const { cart, postCart, price, discountStatus } = this.props;
        let cartToSend = [];
        cartToSend = cart.map(el => ({ name: el.name, countNumber: el.countNumber }));
        cartToSend.push({ price: price, discountStatus: discountStatus, timeStamp: new Date() });
        console.log(cartToSend);
        postCart(cartToSend, price);
    }

    render() {
        const { cart, discountStatus, price, orderStatus } = this.props;

        return (
            <div className="SummaryPage page">
                <h1>Twoje zamówienie:</h1>
                <ul>
                    {cart.map(el =>
                        <li key={uuid()}>
                            <p>Kierunek: {el.name}</p>
                            <p>Cena za osobę: $ {el.price}</p>
                            <p>Osób: {el.countNumber}</p>
                            <p className="oneProductSummary">Razem: $ {el.price * el.countNumber}</p>
                        </li>
                    )}
                </ul>
                <div className="priceSummary">
                    <h5>Rabat: {discountStatus ? '20%' : '0'}</h5>
                    <h4 className="numbers">Cena końcowa: $ {price}</h4>
                    <div>
                        {orderStatus ? <button className="btn btn-success">Zamówienie złożone</button> : <button className="btn btn-dark btn-lg" onClick={this.handleOrder}>Zamawiam</button>}
                    </div>
                    <div>
                        {orderStatus ? 
                            <Link to="/">
                                <button className="btn btn-secondary mt-4">Kontynnuj zakupy</button>
                            </Link> : ''}
                    </div>
                </div>
            </div>
        );
    }

    
}

SummaryPage.propTypes = {
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountStatus: PropTypes.bool.isRequired,
    postCart: PropTypes.func.isRequired,
    orderStatus: PropTypes.bool.isRequired
}

export default SummaryPage;