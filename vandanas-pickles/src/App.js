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
import Terms from './screens/Terms&Cond/Terms';
import Testimonials from './screens/Testimonials/testimonials';

function App() {
  return (
      <Router>
        <Layout>
          <Switch>
          <Route path={"/Testimonials"} component={Testimonials} />
          <Route path={"/ContactUs"} component={Contact} />
          <Route path={"/AboutUs"} component={About} />
          <Route path={'/Login'} component= {Account} />
          <Route path={'/TermsAndConditions'} component={Terms} />
          <Route path={'/'} component={HomePage}/>      
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;