import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Search from './pages/Search';
import NavComponent from './components/Nav';
import Footer from './components/Footer';

const Routes = () => (
  <BrowserRouter>
    <NavComponent />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/search" component={Search} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
