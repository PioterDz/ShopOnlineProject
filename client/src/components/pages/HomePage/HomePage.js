import React from 'react';
import Sort from '../../features/Sort/Sort';
import ProductsList from '../../features/ProductsList/ProductsList';
import Pagination from '../../common/Pagination/Pagination';

import './HomePage.scss';

const HomePage = () => (
    <div className="HomePage row">
        <Sort />
        <ProductsList />
        <Pagination />
    </div>
);
    
export default HomePage;