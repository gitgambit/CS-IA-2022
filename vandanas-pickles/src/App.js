import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import About from './components/AboutUs/About';
import Contact from './components/ContactUs/contact';
import { Account } from './screens';
import HomePage from './screens/HomePage/HomePage';
import Layout from './screens/Layout/layout';
import Cart from './screens/Orders/Cart';
import ProductDisplay from './screens/Products/ProductDisplay';
import ProductSearch from './screens/Products/ProductSearch';
import Terms from './screens/Terms&Cond/Terms';
function App() {
  return (
      <Router>
        <Layout>
          <Switch>
          <Route path={"/Cart"} component={Cart} />
          <Route path={"/ContactUs"} component={Contact} />
          <Route path={"/AboutUs"} component={About} />
          <Route path={'/Login'} component= {Account} />
          <Route path={'/Products/Search/:input'} component={ProductSearch} />
          <Route path={'/TermsAndConditions'} component={Terms} />
          <Route path={'/Products'} component={ProductDisplay}/>      
          <Route path={'/'} component={HomePage}/>      
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;