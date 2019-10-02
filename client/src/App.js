import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/HomePage/HomePageContainer';
import FaqPage from './components/pages/FaqPage/FaqPage';
import RulesPage from './components/pages/RulesPage/RulesPage';
import ContactPage from './components/pages/ContactPage/ContactPage';
import CartPage from './components/pages/CartPage/CartPageContainer';
import ProductPage from './components/pages/ProductPage/ProductPageContainer';
import SummaryPage from './components/pages/SummaryPage/SummaryPageContainer';
import NotFound from './components/pages/NotFoundPage/NotFoundPage';

import { bounceTransition, mapStyles } from './AnimatedSwitch';

  
class App extends React.Component {

    render() {

        return (
            <MainLayout>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="route-wrapper"
                >
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/faq" component={FaqPage} />
                    <Route exact path="/rules" component={RulesPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/productpage/:id" component={ProductPage} />
                    <Route exact path="/summary" component={SummaryPage} />
                    <Route component={NotFound} />
                </AnimatedSwitch>
            </MainLayout>

        );
    }
}


export default App;