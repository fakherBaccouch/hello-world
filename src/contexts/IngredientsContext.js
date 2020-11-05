import React, { createContext, useContext, useState, useEffect } from "react"

export const IngContext =  createContext()

export const   useING=()=> {
  return useContext(IngContext)
}

export function IngProvider({ children }) {
  const [ingredients, setIngredients] = useState({
    cheese: 4,
      meat: 2,
     
     
      bacon: 3,
      tomato:1,
      salad: 1

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
  if(ingredients[type]>0){ setIngredients(
    (prevState)=>(
        {
            ...prevState,
         [type] :prevState[type]-1  }
    )
   )}
   
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