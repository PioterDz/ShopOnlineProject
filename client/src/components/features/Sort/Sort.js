import React from 'react';

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
                <p className="SortBy" onClick={this.alphabetSort}>Nazwa A-Z</p>
                <p className="SortBy" onClick={this.reverseAlphabetSort}>Nazwa Z-A</p>
                <p className="SortBy" onClick={this.priceSort}>Cena rosnąco</p>
                <p className="SortBy" onClick={this.reversePriceSort}>Cena malejąco</p>
            </div>
        );
    }

}

export default Sort;
