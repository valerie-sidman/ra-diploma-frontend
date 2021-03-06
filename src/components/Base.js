import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Catalog from './Catalog';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import Product from './Product';
import Cart from './Cart';
import SuccessPage from './SuccessPage';
import ErrorLoadingPage from './ErrorLoadingPage';

export default function Base() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id([0-9]+)?" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/success" component={SuccessPage} />
        <Route path="/errorloading" component={ErrorLoadingPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  )
}