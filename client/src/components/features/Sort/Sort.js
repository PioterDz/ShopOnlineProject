import React from 'react';
import { PropTypes } from 'prop-types';

import DropDown from '../../common/DropDown/DropDown';

class Sort extends React.Component {

    alphabetSort = () => {
        const { handleSort } = this.props;

        handleSort('AtoZ');
    }

    reverseAlphabetSort = () => {
        const { handleSort } = this.props;

        handleSort('ZtoA');
    }

    priceSort = () => {
        const { handleSort } = this.props;
        
        handleSort('asc');
    }

    reversePriceSort = () => {
        const { handleSort } = this.props;

        handleSort('desc');
    }


    render() {

        const { sortDirection, numberOfProducts } = this.props;

        return (
            <div className="Sort col-sm-4">
                <div className="SortSection">
                    <div className="d-none d-md-block">
                        <h4>Sortuj</h4>
                        <p className={"SortBy " + (sortDirection === 'AtoZ' ? 'active' : '')} onClick={this.alphabetSort}>Nazwa A-Z</p>
                        <p className={"SortBy " + (sortDirection === 'ZtoA' ? 'active' : '')} onClick={this.reverseAlphabetSort}>Nazwa Z-A</p>
                        <p className={"SortBy " + (sortDirection === 'asc' ? 'active' : '')} onClick={this.priceSort}>Cena rosnąco</p>
                        <p className={"SortBy " + (sortDirection === 'desc' ? 'active' : '')} onClick={this.reversePriceSort}>Cena malejąco</p>
                    </div>
                    <DropDown  
                        alphabetSort={this.alphabetSort} 
                        reverseAlphabetSort={this.reverseAlphabetSort}
                        priceSort={this.priceSort}
                        reversePriceSort={this.reversePriceSort} 
                    />
                </div>
                <p className="numberOfProductsAvailable">Liczba dostępnych wyjazdów: {numberOfProducts}</p>
            </div>
        );
    }
}

Sort.propTypes = {
    handleSort: PropTypes.func.isRequired,
    sortDirection: PropTypes.string.isRequired
}

export default Sort;
