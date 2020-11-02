import React, { createContext, useContext, useState, useEffect } from "react"

export const IngContext =  createContext()

export const   useING=()=> {
  return useContext(IngContext)
}

export function IngProvider({ children }) {
  const [ingredients, setIngredients] = useState({
      salad: 0,
      meet: 0,
      bacon: 0,
      sauce: 0,
      bacon: 0,
      price:0

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
function addIngredient(type) {
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
    addIngredient
  }

  return (
    <IngContext.Provider value={values}>
      {children}
    </IngContext.Provider>
  )
}
export default IngProvider