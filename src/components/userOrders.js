import React, {  useContext, useState, useEffect } from "react"
import {useING} from "../contexts/IngredientsContext"

const UserOrders=()=>{
    const {ingredients} = useING()
  
    return(
        <div className="addOrder">
        

        </div>
    )
}
export default UserOrders