import React from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuidv4';

const SummaryPage = (props) => {

    const { cart, discountStatus, price } = props;

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
                <h4>Cena końcowa: $ {price}</h4>
                <button className="btn btn-dark btn-lg">Zamawiam</button>
            </div>
        </div>
    );
}

SummaryPage.propTypes = {
    cart: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    discountStatus: PropTypes.bool.isRequired,
}

export default SummaryPage;