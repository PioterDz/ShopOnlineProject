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

    onSort = (sortedData) => {
        const { sort } = this.props;

        sort(sortedData);
    }

    closeModal = () => {
        const { changeModal } = this.props;
        
        changeModal();
    }

    render() {
        const { products, page, displayPerPage, numberOfPages, modal } = this.props;
        
        return (
            <div className="HomePage row page">
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
    sort: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    displayPerPage: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
    modal: PropTypes.bool.isRequired,
    changeModal: PropTypes.func.isRequired
}
    
export default HomePage;