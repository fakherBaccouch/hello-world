import React,{useState} from 'react';

import { useING } from "../contexts/IngredientsContext"

const Modal=()=>{
  const [display,setDisplay]=useState("none")
  const {ingredients} = useING()
  const handleDisplay=()=>{
    if(display==="none"){
      setDisplay("block")
    }else{      setDisplay("none")
  }
  
  }
  return (
    <div    onClick={handleDisplay}>



<button class="button button4">ORDER NOW</button>


<div style={{display:display}}id="myModal" class="modal">


  <div   onClick={handleDisplay} className="modal-content">
 
     
    

<h1 style={{margin:"10px",textAlign:"center"}}>Your Order</h1>
<p style={{textAlign:"left",margin:"20px",marginLeft:"0"}}>Feb 10,2020 9:36 PM</p>
<span style={{borderBottom:"1px solid grey",paddingBottom:"20px",fontWeight:"600"}} id="modalUlId" ><span id='modalUlIdChild1' ><span id="lol">QTY</span><span id="xd">ITEM</span></span><span id='odalUlIdChild2'>PRICE</span></span>
{Object.keys(ingredients).map(
  (key)=>{
   return <div> <span id="modalUlId"  ><span   id="modalUlIdChild1"><span id="lol" >{ingredients[key]}</span><span  id="xd">{key}</span></span><span   id='modalUlIdChild2'>$15</span></span></div>
   

  }
  
)}
<span style={{float:"right",display:"flex",marginLeft:"10px"}}  id='modalUlIdChild2'><span style={{fontWeight:"600"}}>Total</span>:$150</span>

    
<button class="button">CHECKOUT</button>

</div>
</div>
    </div>
  )
}
export  default Modal

