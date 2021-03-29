import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Catalog from './Catalog';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import ErrorPage from './ErrorPage';


export default function Base() {
  return (
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router >
  )
}