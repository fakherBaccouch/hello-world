import { AssignmentReturnRounded } from "@material-ui/icons"
import React, { useContext, useState, useEffect } from "react";
import { useING } from "../contexts/IngredientsContext"
const ControlsSection = ()=>{
    const { ingredients,addIngredient ,removeIngredient} = useING()
const controls= Object.keys(ingredients).map(
    (key)=>{
        return< div style={{width:"fit-content",textAlign: "center", marginTop:"15px",color:"white",}}>

        <button onClick={()=>addIngredient(key)} className="icon-btn add-btn">
          <div className="add-icon"></div>
          <div  className="btn-txt">Add</div>
        </button>
       
    
        <button onClick={()=>removeIngredient(key)} className="icon-btn add-btn">  
          <div className="btn-txt">Remove</div>
        </button>
        <span style={{marginLeft:"50px",marginRight:"50px"}}><span id="key">{key}</span></span>
       </div>
    }
)
    return (
        
            <div className="controlsSection">
<div className="div1">1</div>
    <div className="div2">
    {controls}

    <a href='www.facebook.com' className="btn btn-white">ORDER</a>

    <div></div>












        
    </div>
<div className="div3">3</div>
</div>
    )
        

}
export default ControlsSection;
