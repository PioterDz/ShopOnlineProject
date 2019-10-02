import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import './styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBasket, faArrowLeft, faArrowRight, faMapMarkedAlt, faMobileAlt, faAt, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, faShoppingBasket, faArrowLeft, faArrowRight, faMapMarkedAlt, faMobileAlt, faAt, faBars);

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
    
ReactDOM.render(<Root />, document.getElementById('root'));
