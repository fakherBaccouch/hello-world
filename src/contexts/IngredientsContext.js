import React, { createContext, useContext, useState, useEffect } from "react"

export const IngContext =  createContext()

export const   useING=()=> {
  return useContext(IngContext)
}

export function IngProvider({ children }) {
  const [ingredients, setIngredients] = useState({
      salad: 1,
      meet: 1,
      bacon: 2,
      cheese: 4,
      bacon: 5,
      tomato:2,
      price:6

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