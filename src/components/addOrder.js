import React from "react"
import Burger from "./burger"
import ControlsSection from "./controlsSection"


const AddOrder = () => {
    return (
        <div className="addOrder">
            <h1 className="header" style={{fontSize:" 200px",zIndex:"0"}}>BURGER</h1>
          <Burger/>
          <ControlsSection/>
        </div>
    )
}
export default AddOrder