import React from "react"
import Burger from "./burger"
import ControlsSection from "./controlsSection"
import SpringModal from "./modal.js"

const AddOrder = () => {
    return (
        <div className="addOrder">
            
          
         <h1 style={{fontSize:"100px"}} className="header">burger</h1>
          <Burger/>
        
          
          <ControlsSection/>
          
          <SpringModal/>
        </div>
    )
}
export default AddOrder