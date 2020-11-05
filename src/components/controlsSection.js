import { AssignmentReturnRounded } from "@material-ui/icons"
import React, { useContext, useState, useEffect } from "react";
import { useING } from "../contexts/IngredientsContext"
const ControlsSection = ()=>{
    const { ingredients,addIngredient ,removeIngredient} = useING()
const controls= Object.keys(ingredients).map(
    (key)=>{
        return(
            <div style={{display:"flex",alignItems    :"center"}}>
                <a onClick={()=>addIngredient(key)} style={{cursor:"pointer",display:'inline',fontSize:"50px",color:"white"}}>+</a>
        <p style={{display : "inline-block",color:"#FAAF18",marginLeft:"20px",marginRight:"20px",fontSize:"20px",textTransform:"uppercase",fontFamily:"cursive"}}>{key}</p> 
        <a onClick={()=>removeIngredient(key)} style={{cursor:"pointer",display:'inline',fontSize:"50px",color:"white"}}>-</a>
            </div>
        ) 
    }
)

    return (
        
            <div className="controlsSection">

 
   


  {controls}



   









</div>
    )
        

}
export default ControlsSection;
