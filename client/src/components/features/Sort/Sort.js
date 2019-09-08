import React from 'react';

import './Sort.scss';

class Sort extends React.Component {

    alphabetSort = () => {
        const { products, handleSort } = this.props;

        const sortedProducts = products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1);
        handleSort(sortedProducts);
    }

    reverseAlphabetSort = () => {
        const { products, handleSort } = this.props;

        const sortedProducts = products.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1);
        handleSort(sortedProducts);
    }

    priceSort = () => {
        const { products, handleSort } = this.props;
        
        const sortedProducts = products.sort((a, b) => a.price - b.price);
        handleSort(sortedProducts);
    }

    reversePriceSort = () => {
        const { products, handleSort } = this.props;

        const sortedProducts = products.sort((a, b) => b.price - a.price);
        handleSort(sortedProducts);
    }


    render() {
        return (
            <div className="Sort col-4">
                <h4>Sortuj</h4>
                <p className="text-secondary" onClick={this.alphabetSort}>Nazwa A-Z</p>
                <p className="text-secondary" onClick={this.reverseAlphabetSort}>Nazwa Z-A</p>
                <p className="text-secondary" onClick={this.priceSort}>Cena rosnąco</p>
                <p className="text-secondary" onClick={this.reversePriceSort}>Cena malejąco</p>
            </div>
        );
    }

}

export default Sort;
