import React from 'react';

import { Spinner } from 'reactstrap';

class LoadSpinner extends React.Component {

    render() {
        return (
            <div className="Spinner">
                <Spinner color="secondary" style={{ width: '3rem', height: '3rem' }} />
            </div>
        );
    }
}

export default LoadSpinner;