
import Navbar from "./components/navbar"
import React, {useLocation,   useContext, useState, useEffect } from "react"
import  IngProvider  from './contexts/IngredientsContext'
import {useAuth} from "./contexts/IngredientsContext"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./privateRoute"
import PrivateRouteSecondary from "./PrivateRouteSecondary"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
     
} from "react-router-dom";


import './styling/AppScss.scss';
import AddOrder from "./components/addOrder"
import UserOrders from "./components/userOrders"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Account from "./components/account"
import Checkout from "./components/checkout"


export function App() {  
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  
  return (
<div style={{height:"100%"}} className="App">
  <Router>
    <AuthProvider ><IngProvider>
   <Navbar/>
      <Switch>
          <Route exact path="/">
        
          </Route>
         
        
          <PrivateRoute exact  path="/signin" component={Signin} />
          <PrivateRoute exact path="/addorder" component={AddOrder} />
          <Route exact path="/account">
            <Account/>
          </Route>
          <PrivateRoute exact path="/signup" component={Signup} />

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
