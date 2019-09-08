import React from 'react';

class Pagination extends React.Component {

    changePage = (e) => {
        this.props.onPageChange(e.target.value);
    }
    
    render() {

        const { numberOfPages } = this.props;

        return (
            <ul className="Pagination list-group list-group-horizontal-md flex-fill col-4 offset-8">
               {[...Array(numberOfPages)].map((el, id) => <li onClick={this.changePage} className="list-group-item" key={id} value={id + 1}>{id + 1}</li>)}
            </ul>
        );
    }
}

export default Pagination;