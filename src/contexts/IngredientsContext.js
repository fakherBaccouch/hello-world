import React, { createContext, useContext, useState, useEffect } from "react"

export const IngContext =  createContext()

export const   useING=()=> {
  return useContext(IngContext)
}

export function IngProvider({ children }) {
  const [ingredients, setIngredients] = useState({
    Cheese: 0,
      Meat: 0,
     
     
      Bacon:0 ,
      Tomato:0,
      Salad: 0

  })
  const [prices] = useState({
    Cheese: 0.5,
    Meat: 0.8,
     
     
    Bacon: 0.8,
    Tomato:0.2,
    Salad: 0.2

  })
  const [price,setPrice] = useState(4)
//add ingredients
function addIngredient(type) {

      setIngredients(
       (prevState)=>(
           {
               ...prevState,
            [type] :prevState[type]+1   }
       )
      )
      let newPrice = price + prices[type]
      setPrice(newPrice)

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
   let newPrice = price - prices[type]
   setPrice(newPrice)}




  

  const values = {
    ingredients ,
    addIngredient,
    removeIngredient,
    price,
    prices
  }

  return (
    <IngContext.Provider value={values}>
      {children}
    </IngContext.Provider>
  )
}
export default IngProvider