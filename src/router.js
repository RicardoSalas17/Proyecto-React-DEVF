import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/styled-components/Navbar'
import Home from './components/home/Home';
import SignUp from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/profile/profile';
import ProductDetail from './components/product/ProductDetail'
import AddProduct from './components/addProduct/AddProduct'


const Router = () => (
    <BrowserRouter>
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/search/:itemsSearch" comonent={Home}/>
        <Route exact path="/addproduct" comonent={AddProduct}/>
      </Switch>
    </BrowserRouter>
  );
  
  export default Router;