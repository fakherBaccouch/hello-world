import React, {  useContext, useState, useEffect } from "react"
import {useING} from "../contexts/IngredientsContext"

const UserOrders=()=>{
    const {ingredients} = useING()
  
    return(
        <div className="addOrder">
          <h1>loo</h1>
          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>


          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>


          <h1>loo</h1>

          <h1 style={{color:"red"}}>loo</h1>

          <h1>loo</h1>


          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>

          <h1>loo</h1>


      <p>{ ingredients && ingredients["salad"]}</p>    
        </div>
    )
}
export default UserOrders