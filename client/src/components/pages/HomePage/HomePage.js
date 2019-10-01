import React from 'react';
import { PropTypes } from 'prop-types';

import Sort from '../../features/Sort/Sort';
import ProductsList from '../../features/ProductsList/ProductsList';
import Pagination from '../../common/Pagination/Pagination';
import ModalComponent from '../../common/Modal/Modal';
import SearchBox from '../../common/SearchBox/SearchBox';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        const { loadData, resetRequest, resetSortDirection } = this.props;
        resetRequest();
        resetSortDirection();
        loadData();
    }

    onPageChange = (pageNumber) => {
        this.setState({ page: pageNumber });
    }

    onSort = (key) => {
        const { sortBy } = this.props;

        sortBy(key);
    }

    closeModal = () => {
        const { changeModal } = this.props;
        
        changeModal();
    }

    handleSearch = (input) => {
        const { search } = this.props;

        search(input);
    }



    render() {
        const { products, displayPerPage, modal, request, discountCode, sortDirection } = this.props;
        const { page } = this.state;

            return (
                <div className="HomePage row page">
                    <Sort
                        handleSort={this.onSort}
                        numberOfProducts={products.length}
                        sortDirection={sortDirection}
                    />

                    <div className="col-sm-8">
                        <SearchBox handleChange={this.handleSearch} />  
                        <ProductsList 
                            products={products}
                            currentPage={page}
                            displayPerPage={displayPerPage}
                            request={request}
                        />
                    </div>

                    <Pagination
                        onPageChange={this.onPageChange}
                        currentPage={page}
                        displayPerPage={displayPerPage}
                        numberOfProducts={products.length}
                    />
                    
                    <ModalComponent
                        closeModal={this.closeModal}
                        header='Tylko dzisiaj'
                        modal={modal}
                        content={'Oferta specjalna! Jeżeli dzisiaj dokonasz zakupu na naszej stronie wpisując kod rabatowy ' + discountCode + ', otrzymasz 20% zniżki na wszystko! Z takim urlopem nie ma co zwlekać!'}
                    />
                </div>
            );
        
    }
}

HomePage.propTypes = {
    products: PropTypes.array.isRequired,
    displayPerPage: PropTypes.number.isRequired,
    modal: PropTypes.bool.isRequired,
    changeModal: PropTypes.func.isRequired,
    sortBy: PropTypes.func.isRequired,
    sortDirection: PropTypes.string.isRequired,
    loadData: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired,
    resetRequest: PropTypes.func.isRequired,
    discountCode: PropTypes.string.isRequired,
    resetSortDirection: PropTypes.func.isRequired
}
    
export default HomePage;