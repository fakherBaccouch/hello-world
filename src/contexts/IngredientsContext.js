import React, { createContext, useContext, useState, useEffect } from "react"

export const IngContext =  createContext()

export const   useING=()=> {
  return useContext(IngContext)
}

export function IngProvider({ children }) {
  const [ingredients, setIngredients] = useState({
    cheese: 4,
      meat: 500,
     
     
      bacon: 60,
      tomato:80,
      salad: 100

  })
//add ingredients
function addIngredient(type) {
      setIngredients(
       (prevState)=>(
           {
               ...prevState,
            [type] :prevState[type]+1   }
       )
      )
  }
//remove ingredients
function removeIngredient(type) {
    setIngredients(
     (prevState)=>(
         {
             ...prevState,
          [type] :prevState[type]-1  }
     )
    )
}




  

  const values = {
    ingredients ,
    addIngredient,
    removeIngredient
  }

  return (
    <IngContext.Provider value={values}>
      {children}
    </IngContext.Provider>
  )
}
export default IngProvider