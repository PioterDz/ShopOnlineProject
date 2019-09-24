import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/HomePage/HomePageContainer';
import FaqPage from './components/pages/FaqPage/FaqPage';
import RulesPage from './components/pages/RulesPage/RulesPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import CartPage from './components/pages/CartPage/CartPageContainer';
import ProductPage from './components/pages/ProductPage/ProductPageContainer';
import SummaryPage from './components/pages/SummaryPage/SummaryPageContainer';
import NotFound from './components/pages/NotFoundPage/NotFoundPage';

class App extends React.Component {

    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/faq" component={FaqPage} />
                    <Route exact path="/rules" component={RulesPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/productpage/:id" component={ProductPage} />
                    <Route exact path="/summary" component={SummaryPage} />
                    <Route component={NotFound} />
                </Switch>
            </MainLayout>
        );
    }
}


export default App;