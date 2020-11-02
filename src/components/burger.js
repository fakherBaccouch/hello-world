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

    return (
        <div className="burger">
            <div className="top-bread"></div>
            {ing}

            <div className="bottom-bread"></div>
        </div>
    )
}
export default Burger