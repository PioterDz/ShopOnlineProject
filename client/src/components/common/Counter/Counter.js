import React from 'react';

class Counter extends React.Component {

    deleteProduct = () => {
        const { deleteProduct, product } = this.props;
        deleteProduct(product.id);
    }

    minusOne = () => {
        const { product, substractFromCounter } = this.props;
        substractFromCounter(product.countNumber, product.id);
    }

    plusOne = () => {
        const { product, addToCounter } = this.props;
        addToCounter(product.countNumber, product.id);
    }

    render() {

        const { product } = this.props;

        return (
            <div className="Counter col-2">
                <div className="CountSection">
                    <span onClick={this.minusOne} className="btn-light mr-2">-</span>
                    <h3 className="my-0 mx-2">{ product.countNumber }</h3>
                    <span onClick={this.plusOne} className="btn-light mx-2">+</span>
                    <p className="ml-2">szt</p>
                </div>
                <p className="text-danger mt-4 mb-2" onClick={this.deleteProduct}>usuń produkt</p>
            </div>
        );
    }

}

export default Counter;