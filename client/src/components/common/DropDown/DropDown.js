import React from 'react';
import { PropTypes } from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) => {

    const { alphabetSort, reverseAlphabetSort, priceSort, reversePriceSort } = props;
    
    return (
        <UncontrolledDropdown className="d-md-none mb-3" size="lg">
            <DropdownToggle caret>
                Sortuj
            </DropdownToggle>
            <DropdownMenu className="dropDownMenu">
                <DropdownItem className="dropDownItem" onClick={alphabetSort}>Nazwa A-Z</DropdownItem>
                <DropdownItem className="dropDownItem" onClick={reverseAlphabetSort}>Nazwa Z-A</DropdownItem>
                <DropdownItem className="dropDownItem" onClick={priceSort}>Cena rosnąco</DropdownItem>
                <DropdownItem className="dropDownItem" onClick={reversePriceSort}>Cena malejąco</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

DropDown.propTypes = {
    alphabetSort: PropTypes.func.isRequired,
    reverseAlphabetSort: PropTypes.func.isRequired,
    priceSort: PropTypes.func.isRequired,
    reversePriceSort: PropTypes.func.isRequired
}


export default DropDown;