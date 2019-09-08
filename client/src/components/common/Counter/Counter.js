import React from 'react';

import './Counter.scss';

class Counter extends React.Component {

    render() {

        return (
            <div className="Counter">
                <div className="CountSection">
                    <button onClick={this.props.substractFromCounter} type="button">-</button>
                    <h1>{this.props.number}</h1>
                    <button onClick={this.props.addToCounter} type="button">+</button>
                    <p>szt</p>
                </div>
                <p>usuń produkt</p>
            </div>
        );
    }

}

export default Counter;