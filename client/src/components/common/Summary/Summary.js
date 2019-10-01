import React from 'react';
import { PropTypes } from 'prop-types';
import uuid from 'uuidv4';

import LoadSpinner from '../../common/LoadSpinner/LoadSpinner';
import Alert from '../../common/Alert/Alert';

const Summary = (props) => {

    const { cart, request } = props;

    if(request.pending || request.success === null)
    return (
        <div className="Summary">
            <LoadSpinner />
            <h1>Twoje zamówienie:</h1>
            <ul>
                {cart.map(el =>
                    <li key={uuid()}>
                        <p>Kierunek: {el.name}</p>
                        <p>Cena za osobę: $ {el.price}</p>
                        <p>Osób: {el.countNumber}</p>
                        <p className="oneProductSummary">Razem: $ {(el.price * el.countNumber).toFixed(2)}</p>
                    </li>
                )}
            </ul>
        </div>
    );
    else if(!request.pending && request.error !== null) return <Alert color='danger' children={request.error} />;
    else if(!request.pending && request.success)
    return (
        <div className="Summary">
            <h1>Twoje zamówienie:</h1>
            <ul>
                {cart.map(el =>
                    <li key={uuid()}>
                        <p>Kierunek: {el.name}</p>
                        <p>Cena za osobę: $ {el.price}</p>
                        <p>Osób: {el.countNumber}</p>
                        <p className="oneProductSummary">Razem: $ {(el.price * el.countNumber).toFixed(2)}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}

Summary.propTypes = {
    cart: PropTypes.array.isRequired,
    request: PropTypes.object.isRequired,
}

export default Summary;
