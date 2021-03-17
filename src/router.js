import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/styled-components/Navbar'
import Home from './components/home/Home';
import SignUp from './components/signup/Signup';
import Login from './components/login/Login';
import ProductDetail from './components/product/ProductDetail'

const Router = () => (
    <BrowserRouter>
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/product/:id" component={ProductDetail} />

      </Switch>
    </BrowserRouter>
  );
  
  export default Router;