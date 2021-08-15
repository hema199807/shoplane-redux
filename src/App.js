import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar  from './components/Navbar/index';
import Home from './components/Home/index';
import Details from './components/Details/index';
import Order from './components/Order/index';
import Confirmation from './components/confirmation/index';
import Footer from './components/footer/index';
import './App.css';
import Clothing from './components/Clothing';
import Accessories from './components/Accessories';

const App = () => {
  return ( 
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/clothing-section" component={Clothing} />
        <Route path="/accessories-section" component={Accessories} />
        <Route path="/details/:id" component={Details} />
        <Route path="/order" component={Order} />
        <Route path="/confirm" component={Confirmation} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}
 
export default App;
