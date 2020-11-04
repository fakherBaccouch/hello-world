
import Navbar from "./components/navbar"
import React, {  useContext, useState, useEffect } from "react"
import  IngProvider  from './contexts/IngredientsContext'
import {useAuth} from "./contexts/IngredientsContext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './styling/AppScss.scss';
import AddOrder from "./components/addOrder"
import CheckOutPage from "./components/checkoutPage"
import UserOrders from "./components/userOrders"
export function App() {  

  return (
<div className="App">
  <Router>
 <IngProvider>
 <Navbar/>
      <Switch>
          <Route exact path="/">
           welcome to home page
          </Route>
          <Route path="/addorder">
          <AddOrder/>

          </Route>
          <Route path="/checkout">
            <CheckOutPage/>

          </Route>
         
          <Route path="/orders">
            <UserOrders/>
          </Route>
        </Switch>
     
 </IngProvider>
     
  </Router>
 
</div>
    
  );
}

export default App;
