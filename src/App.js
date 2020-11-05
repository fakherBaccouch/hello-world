
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
import UserOrders from "./components/userOrders"
import Signin from "./components/signin"
export function App() {  

  return (
<div style={{height:"100%"}} className="App">
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
        
         
          <Route path="/orders">
            <UserOrders/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
        </Switch>
     
 </IngProvider>
     
  </Router>
 
</div>
    
  );
}

export default App;
