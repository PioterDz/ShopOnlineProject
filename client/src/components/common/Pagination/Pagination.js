import React from 'react';
import uuid from 'uuidv4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Pagination extends React.Component {

    changePage = (e) => {
        this.props.onPageChange(e.target.value);
    }

    previousPage = () => {
        const { currentPage, onPageChange } = this.props;
        onPageChange(currentPage - 1);
    }

    nextPage = () => {
        const { currentPage, onPageChange } = this.props;
        onPageChange(currentPage + 1);
    }
    
    render() {

        const { numberOfPages, currentPage } = this.props;

        return (
            <ul className="Pagination list-group list-group-horizontal-md flex-fill align-items-center col-4 offset-8">
                {currentPage !== 1 ? <FontAwesomeIcon onClick={this.previousPage} icon={faArrowLeft} /> : ''}
                {[...Array(numberOfPages)].map((el, id) => <li onClick={this.changePage} className="list-group-item" key={uuid()} value={id + 1}>{id + 1}</li>)}
                {currentPage !== numberOfPages ? <FontAwesomeIcon onClick={this.nextPage} icon={faArrowRight} /> : ''}
            </ul>
        );
    }
}

export default Pagination;