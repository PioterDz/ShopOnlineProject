import React from 'react';
import { PropTypes } from 'prop-types';

import Sort from '../../features/Sort/Sort';
import ProductsList from '../../features/ProductsList/ProductsList';
import Pagination from '../../common/Pagination/Pagination';
import ModalHomePage from '../../common/ModalHomePage/ModalHomePage';

class HomePage extends React.Component {


    onPageChange = (pageChoosed) => {
        const { pageChange } = this.props;

        pageChange(pageChoosed);
    }

    onSort = (key) => {
        const { sortBy } = this.props;

        sortBy(key);
    }

    closeModal = () => {
        const { changeModal } = this.props;
        
        changeModal();
    }

    render() {
        const { products, page, displayPerPage, numberOfPages, modal, sortDirection } = this.props;
        
        return (
            <div className="HomePage row page">
                <Sort
                    handleSort={this.onSort}
                    sortDirection={sortDirection}
                />
                <ProductsList 
                    products={products}
                    currentPage={page}
                    displayPerPage={displayPerPage}
                />
                <Pagination
                    onPageChange={this.onPageChange}
                    numberOfPages={numberOfPages}
                    currentPage={page}
                />
                <ModalHomePage 
                    closeModal={this.closeModal}
                    modal={modal}
                    content={`Oferta specjalna! Jeżeli dzisiaj dokonasz zakupu na naszej stronie wpisując kod rabatowy 'COZABZDURA', otrzymasz 20% zniżki na wszystko! Z takim urlopem nie ma co zwlekać!`} 
                />
            </div>
        );
    }
}

HomePage.propTypes = {
    pageChange: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    displayPerPage: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
    modal: PropTypes.bool.isRequired,
    changeModal: PropTypes.func.isRequired,
    sortBy: PropTypes.func.isRequired,
    sortDirection: PropTypes.string.isRequired
}
    
export default HomePage;