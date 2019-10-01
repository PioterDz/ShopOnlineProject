import React from 'react';
import { PropTypes } from 'prop-types';


class SearchBox extends React.Component {

    handleInputChange = (event) => {

        this.props.handleChange(event.target.value);
        event.preventDefault();
    }

    render() {
        
        return (
            <form className="SearchBox">
                <div>
                    <h4>Szukaj</h4>
                </div>
                <div>
                    <input type="text" className="inputComponent searchInput" onChange={this.handleInputChange} />
                </div>
            </form>
        );
    }
    
} 


SearchBox.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default SearchBox;