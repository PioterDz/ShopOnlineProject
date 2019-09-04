import React from 'react';
import Sort from '../../features/Sort/Sort';
import ProductsList from '../../features/ProductsList/ProductsList';
import Pagination from '../../common/Pagination/Pagination';

import initialState from '../../../redux/initialState';

import './HomePage.scss';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        
        return (
            <div className="HomePage row">
                <Sort />
                <ProductsList products={this.state.data} />
                <Pagination currentPage={this.state.page} numberOfItems={this.state.data.length} displayNumber={this.state.displayPerPage} />
            </div>
        );
    }
}
    
export default HomePage;