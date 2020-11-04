import React,{useState} from 'react';

import { useING } from "../contexts/IngredientsContext"

const Modal=()=>{
  const [display,setDisplay]=useState("none")
  const handleDisplay=()=>{
    if(display==="none"){
      setDisplay("block")
    }else{      setDisplay("none")
  }
  
  }
  return (
    <div   onClick={handleDisplay}>



<a className="btn btn-white">ORDER</a>

<div style={{display:display}}id="myModal" class="modal">


  <div   onClick={handleDisplay} className="modal-content">
 
     
    

<h1 style={{margin:"10px",textAlign:"center"}}>Your Order</h1>
<p style={{textAlign:"left",margin:"20px",marginLeft:"0"}}>Feb 10,2020 9:36 PM</p>
<span id="modalUlId" ><span id='modalUlIdChild1' ><span style={{marginRight:"10px"}}>QTY</span><span>ITEM</span></span><span id='odalUlIdChild2'>PRICE</span></span>


    

</div>
</div>

    </div>
  )
}
export  default Modal

