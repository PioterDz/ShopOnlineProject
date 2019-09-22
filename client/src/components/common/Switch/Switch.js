import React from 'react';
import { PropTypes } from 'prop-types';

import { CustomInput, Form, FormGroup } from 'reactstrap';

class Switch extends React.Component {

    handleToggleSwitch = () => {
        const { product, toggleSwitch } = this.props;

        toggleSwitch(product.id);
    }

    
    render() {

        const { label } = this.props;

        return (
            <Form>
                <FormGroup>
                    <div className="switch">
                        <CustomInput bsSize="small" type="switch" id="cartSwitch" label={label} onClick={this.handleToggleSwitch} />
                    </div>
                </FormGroup>
            </Form>
        );
    }
}

Switch.propTypes = {
    label: PropTypes.string.isRequired,
    toggleSwitch: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

export default Switch;


