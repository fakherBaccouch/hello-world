import React from "react"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const  Navbar=()=>{
    return (
        <div className="navbar" >
          <h2 className="brand">FAKHER</h2>
               <ul>
          <li>
         <a> <Link to="/addorder">ADD ORDER</Link></a>  
          </li>
          <li>
         <a><Link to="/orders">ORDERS</Link></a>   
          </li>
          <li>
           <a><Link to="/checkout">CHECKOUT</Link></a> 
          </li>
        </ul>
        
        <ul > <div><Link to="/signin"><PermIdentityIcon link style={{color:"white",fontSize:"30px",marginLeft:"20px"}}/></Link></div> <div><ShoppingCartRoundedIcon style={{color:"white",fontSize:"30px",marginLeft:"30px"}}/></div></ul>
        </div>
    )
}
export default Navbar