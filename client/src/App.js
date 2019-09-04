import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/HomePage/HomePage';
import FaqPage from './components/pages/FaqPage/FaqPage';
import RulesPage from './components/pages/RulesPage/RulesPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import CartPage from './components/pages/CartPage/CartPage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import NotFound from './components/pages/NotFoundPage/NotFoundPage';

class App extends React.Component {

    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/faq" component={FaqPage} />
                    <Route exact path="/rules" component={RulesPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/productpage" component={ProductPage} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout>
        );
    }
}


export default App;