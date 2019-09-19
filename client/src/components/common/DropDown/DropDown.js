import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) => {

    const { alphabetSort, reverseAlphabetSort, priceSort, reversePriceSort } = props;
    
    return (
        <UncontrolledDropdown className="d-sm-none mb-3" size="lg">
            <DropdownToggle caret>
                Sortuj
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={alphabetSort}>Nazwa A-Z</DropdownItem>
                <DropdownItem onClick={reverseAlphabetSort}>Nazwa Z-A</DropdownItem>
                <DropdownItem onClick={priceSort}>Cena rosnąco</DropdownItem>
                <DropdownItem onClick={reversePriceSort}>Cena malejąco</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

export default DropDown;