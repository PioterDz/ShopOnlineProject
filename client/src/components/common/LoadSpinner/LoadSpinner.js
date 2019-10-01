import React from 'react';
import { ReactComponent as Spinner } from './puff.svg';

class LoadSpinner extends React.Component {

    render() {
        return (
            <div className="Spinner">
                <Spinner />
            </div>
        );
    }
}

export default LoadSpinner;
