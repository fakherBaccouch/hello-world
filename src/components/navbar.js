import React from "react"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import brand from "../images/brand.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const  Navbar=()=>{
    return (
        <div id="navigation-bar" className="navbar" >
        <img style={{height:"60px"}} src={brand}></img>
               <ul style={{marginLeft:'4%'}}>
          <li>
         <a> <Link to="/addorder">burgerBuilder</Link></a>  
          </li>
         
          
        </ul>
        
        <ul > <div><Link to="/signin"><PermIdentityIcon link style={{color:"white",fontSize:"30px",marginLeft:"20px"}}/></Link></div> <div><ShoppingCartRoundedIcon style={{color:"white",fontSize:"30px",marginLeft:"30px"}}/></div></ul>
        </div>
    )
}
export default Navbar