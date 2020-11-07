import { AssignmentReturnRounded } from "@material-ui/icons"
import React, { useContext, useState, useEffect } from "react";
import { useING } from "../contexts/IngredientsContext"
const ControlsSection = ()=>{
    const { ingredients,addIngredient ,removeIngredient} = useING()
const controls= Object.keys(ingredients).map(
    (key)=>{
        return(
            <div style={{display:"flex",alignItems:"center",width:'20%',justifyContent:"space-between" }}>
                <a onClick={()=>addIngredient(key)} style={{width:"20%",cursor:"pointer",fontSize:"50px",color:"white"}}>+</a>
        <p style={{display : "inline-block",width:"60%",color:"#FAAF18",fontSize:"20px",textTransform:"uppercase",fontFamily:"cursive"}}>{key}</p> 
        <a onClick={()=>removeIngredient(key)} style={{width:"20%",cursor:"pointer",fontSize:"50px",color:"white"}}>-</a>
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
