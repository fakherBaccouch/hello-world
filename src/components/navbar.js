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
          <h1 className="brand">FAKHER</h1>
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
        <ul > <div><PermIdentityIcon style={{color:"white",fontSize:"25px",marginLeft:"20px"}}/>lol</div> <div><ShoppingCartRoundedIcon style={{color:"white",fontSize:"25px",marginLeft:"20px"}}/></div></ul>
       
        </div>
    )
}
export default Navbar