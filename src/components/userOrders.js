import React, {  useContext, useState, useEffect } from "react"
import {useING} from "../contexts/IngredientsContext"

const UserOrders=()=>{
    const {ingredients} = useING()
  
    return(
        <div className="addOrder">
           LIST OF USER ORDERS
      <p>{ ingredients && ingredients["salad"]}</p>    
        </div>
    )
}
export default UserOrders