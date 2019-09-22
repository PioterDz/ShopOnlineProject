import React from 'react';
import uuid from 'uuidv4';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <ul className="Pagination offset-sm-7 offset-lg-8 offset-xl-9">
                <FontAwesomeIcon onClick={this.previousPage} icon="arrow-left" className={"mt-1 " + (currentPage !== 1 ? "visible" : "invisible")} />
                {[...Array(numberOfPages)].map((el, id) => <li 
                onClick={this.changePage} 
                className={"ListOfPagesNumbers numbers " + (currentPage === id + 1 ? 'active' : '')}
                key={uuid()} 
                value={id + 1}>{id + 1}</li>)}
                <FontAwesomeIcon onClick={this.nextPage} icon="arrow-right" className={"mt-1 " + (currentPage !== numberOfPages ? "visible" : "invisible")} />
            </ul>
        );
    }
}

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    numberOfPages: PropTypes.number.isRequired,
}

export default Pagination;