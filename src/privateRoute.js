
import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
 useEffect(()=>
 console.log(rest.path))
  return (
    <Route
      {...rest}
      render={props => {
 if(rest.path=== "/signin" || rest.path === "/signup"){
  return !currentUser ? <Component {...props} /> : <Redirect to="/account" />
 }else { return currentUser ? <Component {...props} /> : <Redirect to="/signin" /> }
        

 
      }}
    ></Route>
  )
}