import React from 'react';
import { PropTypes } from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';

const Alert = (props) => {

    const { color, children } = props;

    return (
        <UncontrolledAlert className="Alert" color={color}>
            {children}
        </UncontrolledAlert>
    );
}

Alert.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Alert;