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

const Checkout = () => {
    const history = useHistory()
    const { ingredients ,price} = useING()
   
    const { currentUser } = useAuth()
    const [info, setInfo] = useState({
        name: "",
        street: "",
        zipCode: "",
        email: currentUser.email,
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
        <div>
            <h1 style={{color:"red",fontSize:"100px"}}>{price}</h1>
            <form onSubmit={(event) => Checkout(event)}>
                <input onChange={(event) => editInfo(event.target)} type='text' name="name" placeholder="name" />
                <input onChange={(event) => editInfo(event.target)} type='text' name="street" placeholder="street" />
                <input onChange={(event) => editInfo(event.target)} type='text' name="zipCode" placeholder="zipCode" />
                <input onChange={(event) => editInfo(event.target)} type='text' name="country" placeholder="Country" />
                <select name="deleveryMethod" onChange={(event) => editInfo(event.target)}  >
                    <option value="Select">Select</option>
                    <option value="fast">FastDelevery</option>
                    <option value="normal">normalDelevery </option>
                </select>
                <button type="submit" >FINAL CHECKOUT</button>
            </form>
        </div>
    )
}
export default Checkout