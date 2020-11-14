
import Navbar from "./components/navbar"
import React, {  useContext, useState, useEffect } from "react"
import  IngProvider  from './contexts/IngredientsContext'
import {useAuth} from "./contexts/IngredientsContext"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./privateRoute"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './styling/AppScss.scss';
import AddOrder from "./components/addOrder"
import UserOrders from "./components/userOrders"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Account from "./components/account"
import Checkout from "./components/checkout"


export function App() {  

  return (
<div style={{height:"100%"}} className="App">
  <Router>
    <AuthProvider ><IngProvider>
 <Navbar/>
      <Switch>
          <Route exact path="/">
           welcome to home page
          </Route>
          <Route path="/addorder">
          <AddOrder/>

          </Route>
        
          <PrivateRoute exact path="/signin" component={Signin} />
          <Route path="/orders">
            <UserOrders/>
          </Route>
          <Route exact path="/account">
            <Account/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
     
 </IngProvider></AuthProvider>
 
     
  </Router>
 
</div>
    
  );
}

export default App;
