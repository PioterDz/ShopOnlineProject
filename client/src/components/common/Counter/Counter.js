import React from 'react';
import { PropTypes } from 'prop-types';

import Switch from '../Switch/Switch';

class Counter extends React.Component {

    deleteProduct = () => {
        const { deleteProduct, product } = this.props;
        deleteProduct(product.id);
    }

    minusOne = () => {
        const { product, substractFromCounter } = this.props;
        substractFromCounter(product);
    }

    plusOne = () => {
        const { product, addToCounter } = this.props;
        addToCounter(product.id);
    }

    handleToggleSwitch = () => {
        const { product, toggleSwitch } = this.props;

        toggleSwitch(product.id);
    }

    render() {

        const { product, toggleSwitch } = this.props;

        return (
            <div className="Counter col-md-2 mt-3 mt-sm-0">
                <div className="CountSection">
                    <span onClick={this.minusOne} className="btn-light bg-transparent mr-2">-</span>
                    <h3 className="mb-2 mx-2">{ product.countNumber }</h3>
                    <span onClick={this.plusOne} className="btn-light bg-transparent mx-2">+</span>
                    <p className="ml-2">osoby</p>
                </div>
                <Switch product={product} toggleSwitch={toggleSwitch} label='opcja z wyżywieniem' />
                <p className="text-danger" onClick={this.deleteProduct}>usuń produkt</p>
            </div>
        );
    }

}

Counter.propTypes = {
    product: PropTypes.object.isRequired,
    addToCounter: PropTypes.func.isRequired,
    substractFromCounter: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    toggleSwitch: PropTypes.func.isRequired
};

export default Counter;