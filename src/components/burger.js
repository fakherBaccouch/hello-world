import React, { useContext, useState, useEffect } from "react";
import { useING } from "../contexts/IngredientsContext"
const Burger = () => {
    const { ingredients } = useING()

    const ing =
        Object.keys(ingredients).map(
            key => {
                if (ingredients[key] > 0) {
                    return <div className={key}>X{ingredients[key]}</div>

                }

            }
        )
        const sum = Object.values(ingredients).reduce(
            (previousScore, currentScore, index)=>previousScore+currentScore, 
            0);
    return (
        <div className="burger">
            <div className="top-bread"></div>
            {sum<=0?<p style={{margin:"10px",color:"grey"}}>ADD INGREDIENTS TO YOUR HAMBURGER</p>:ing}

            <div className="bottom-bread"></div>
        </div>
    )
}
export default Burger