import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from 'reactstrap';

class DiscountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }


    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        const { discountStatus, openInput, inputStatus } = this.props;
        const { value } = this.state;
        const { handleChange } = this;

        if(!discountStatus && !inputStatus) return <Button outline color="secondary" className="mt-4" onClick={openInput}>kod rabatowy</Button>;
        else if(!discountStatus && inputStatus) return <input type="text" value={value} className="DiscountInput" onChange={handleChange} />;
        else if(discountStatus && inputStatus) return <Button color="success" className="mt-4">rabat aktywny</Button>;
    }
}

DiscountButton.propTypes = {
    discountStatus: PropTypes.bool.isRequired,
    openInput: PropTypes.func.isRequired,
}

export default DiscountButton;

