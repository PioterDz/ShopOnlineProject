import React from 'react';
import Sort from '../../features/Sort/Sort';
import ProductsList from '../../features/ProductsList/ProductsList';
import Pagination from '../../common/Pagination/Pagination';

import './HomePage.scss';


class HomePage extends React.Component {

    onPageChange = (pageChoosed) => {
        const { pageChange } = this.props;

        pageChange(pageChoosed);
    }

    onSort = (sortedData) => {
        const { sort } = this.props;

        sort(sortedData);
    }

    render() {
        const { products, page, displayPerPage, numberOfPages } = this.props;
        
        return (
            <div className="HomePage row">
                <Sort 
                    products={products}
                    handleSort={this.onSort}
                />
                <ProductsList 
                    products={products}
                    currentPage={page}
                    displayPerPage={displayPerPage}
                />
                <Pagination
                    onPageChange={this.onPageChange}
                    numberOfPages={numberOfPages}
                />
            </div>
        );
    }
}
    
export default HomePage;