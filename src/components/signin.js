import React, {  useContext, useState, useEffect } from "react";
import burger_logo from '../images/burger_logo.png' // relative path to image 

const Signin=()=>{
   
    return(
        <div className="signin">
    <div className="signin_container">

    <h1 id='signin_title'>SIGNIN</h1>
    <img style={{display:"block",width:"30%" , height:"20%",marginLeft:"33%"}} src={burger_logo}></img>

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
     <button className="button button_to_signup">SIGN UP</button>
    </div>
  

        </div>
    )
}
export default Signin