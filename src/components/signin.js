import React, {  useContext, useState, useEffect } from "react";
import burger_logo from '../images/burger_logo.png' // relative path to image 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Signin=()=>{
   
    return(
        <div className="signin">
    <div style={{position:"relative"}} className="signin_container">

    <h1 id='signin_title'>SIGNIN</h1>
    <img src={burger_logo} style={{height:"100px",left:"33%",textAlign:"center",display:"block",  marginLeft:"auto", marginRight:"auto"}}></img>
    <form>
    
    <div class="group">      
      <input type="text" required></input>
      <span class="highlight"></span>
     
      <label>Adresse Email*</label>
    </div>
      
    <div class="group">      
      <input type="password" required></input>
      <span class="highlight"></span>
      <label>Passwrod</label>
    </div>
    <button className="button button_signin">SIGN IN</button>
  </form>
     <p>Don't have an account yet?</p>
     <Link to="/signup"><button className="button button_to_signup">SIGN UP</button></Link>   
    </div>
  

        </div>
    )
}
export default Signin