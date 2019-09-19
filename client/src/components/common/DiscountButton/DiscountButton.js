import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from 'reactstrap';

class DiscountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            codeInvalid: false
        }
    }

    handleSubmit = () => {
        const { discountCode, handleDiscountCode, discountStatus } = this.props;

        if(!discountStatus) {

            if(discountCode === this.state.value) {
                handleDiscountCode();
            } else {
                this.setState({ codeInvalid: true });
            }
        }
    }

    handleBackToInput = () => {
        this.setState({ codeInvalid: false });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {

        const { discountStatus, openInput, inputStatus } = this.props;
        const { value, codeInvalid } = this.state;
        const { handleChange, handleSubmit, handleBackToInput } = this;

        if(!discountStatus && !inputStatus) return <Button outline color="secondary" className="mt-4" onClick={openInput}>kod rabatowy</Button>;
        else if(!discountStatus && inputStatus && codeInvalid) return <Button className="code" color="danger" onClick={handleBackToInput}>nie ten kod, powrót</Button>
        else if(!discountStatus && inputStatus) return (
            <div className="code">
                <input type="text" value={value} className="DiscountInput" onChange={handleChange} />
                <Button color="success" className="btn btn-sm ml-3" onClick={handleSubmit}>zatwierdź</Button>
            </div>
        );
        else if(discountStatus && inputStatus) return <Button color="success" className="code mt-4">rabat aktywny</Button>;
    }
}

DiscountButton.propTypes = {
    discountStatus: PropTypes.bool.isRequired,
    openInput: PropTypes.func.isRequired,
    inputStatus: PropTypes.bool.isRequired,
    discountCode: PropTypes.string.isRequired,
    handleDiscountCode: PropTypes.func.isRequired
}

export default DiscountButton;

