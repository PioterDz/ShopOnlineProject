import React from 'react';

const Pagination = (props) => {

    const { currentPage, numberOfItems, displayNumber } = props;
    
    const numberOfPages = Math.ceil(numberOfItems / displayNumber);
    let pages = [];

    for(let i=1 ; i <= numberOfPages ; i++) {
        pages.push(i);
    }

    return (
        <div className="Pagination d-flex col-4 offset-8">
           {pages.map((el, id) => <p className="p-3" key={id}>{el}</p>)}
        </div>
    );
}

export default Pagination;