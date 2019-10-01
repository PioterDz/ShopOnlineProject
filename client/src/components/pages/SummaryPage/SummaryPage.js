import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Summary from '../../common/Summary/Summary';

class SummaryPage extends React.Component {

    handleOrder = () => {
        const { cart, postCart, price, discountStatus } = this.props;

        let cartToSend = [];
        cartToSend = cart.map(el => ({ name: el.name, countNumber: el.countNumber }));
        cartToSend.push({ price: price, discountStatus: discountStatus, timeStamp: new Date() });

        postCart(cartToSend, price);
    }

    render() {
        const { cart, discountStatus, price, orderStatus, request } = this.props;
        
        return (
            <div className="SummaryPage page">
                <Summary cart={cart} request={request} />
                <div className="priceSummary">
                    <h5>Rabat: {discountStatus ? '20%' : '0'}</h5>
                    <h4 className="numbers">Cena końcowa: $ {price.toFixed(2)}</h4>
                    <div>
                        {orderStatus ? 
                        <button className="btn btn-success">Zamówienie złożone</button> : 
                        <button className="btn btn-dark btn-lg" onClick={this.handleOrder}>Zamawiam</button>}
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
    orderStatus: PropTypes.bool.isRequired,
    request: PropTypes.object.isRequired,
}

export default SummaryPage;