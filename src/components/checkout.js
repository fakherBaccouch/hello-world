import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useING } from "../contexts/IngredientsContext";
import { useAuth } from "../contexts/AuthContext";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
} from "react-router-dom";
import axios from "axios"
import Burger from "./burger";

const Checkout = () => {
    const history = useHistory()
    const { ingredients ,price} = useING()
   
    const { currentUser } = useAuth()
    const [info, setInfo] = useState({
        name: "",
        street: "",
        zipCode: "",
        email:currentUser && currentUser.email,
        country: "",
        deleveryMethod: "select"
    })
    //edit the info object
    const editInfo = target => {
        setInfo({ ...info, [target.name]: target.value })
    };
    //Checking out confirmation
    const Checkout = (e) => {
        console.log(currentUser.uid)
        e.preventDefault();
        let email = currentUser.uid
        const item = {
            info,
            ingredients,
            price
        }
        axios.post('https://burgerapp-b7f16.firebaseio.com/orders.json', item
        )
    }
    return (
        <div className="checkout">
         <h1 style={{fontSize:"50px",marginTop:"80px"}} className="header">We hope it tastes well !!!</h1>
            <div style={{display:"flex",alignItems:"center",margin:"40px"}}>
                <Burger/>
               
            </div>
            <div style={{position:"relative",margin:"20px",width:"30%",borderRadius:"5px"}} className="signin_container">
            <form   onSubmit={(event)=>Checkout(event)}>
           
        
      
    
    <div style={{margin:"20px"}} class="group">      
    <input required style={{borderRadius:"0"}} onChange={(event) => editInfo(event.target)} type='text' name="name" placeholder="name" />
      <span class="highlight"></span>
     
      
    </div>
      
    <div style={{margin:"20px"}}class="group">      
    <input required style={{borderRadius:"0"}} onChange={(event) => editInfo(event.target)} type='text' name="street" placeholder="street" />
      <span class="highlight"></span>
    
    </div>
      
    <div style={{margin:"20px"}} class="group">      
    <input required style={{borderRadius:"0"}} onChange={(event) => editInfo(event.target)} type='text' name="zipCode" placeholder="zipCode" />
      <span class="highlight"></span>
    
    </div>
    <div style={{margin:"20px"}}class="group">      
    <input required style={{borderRadius:"0"}} onChange={(event) => editInfo(event.target)} type='text' name="country" placeholder="country" />
      <span class="highlight"></span>
    
    </div>
    <button type="submit" style={{background:"#FAAF18",color:"black"}}className="button button_signin">CHECKOUT</button>
  </form>
         </div>
      
        </div>
    )
}
export default Checkout