import React from "react"
import { useAuth } from "../contexts/AuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
  } from "react-router-dom";
 const  Logout = ()=>{
    const history = useHistory()

    const {  logout } = useAuth()
 const  logingOut  = async ()=>{
     await logout()
     history.push("/")
  }
    return (
        <div className="logout">
<h1 className="logout_header">MY ACCOUNT</h1>    

<button onClick={()=>logingOut()} style={{width:"20%",margin:"100px auto",borderRadius:"0"}}className="button button_to_signup">LOG OUT</button> 

<div className="logout_nav"><div><h1>ORDERS HISTORY</h1><p>You haven't placed any orders yet.

</p></div><div><h1>ACCOUNT DETAILS
</h1><p>FAKHER BACCOUCH

</p></div></div>


  </div>
        
    )
}
export default  Logout