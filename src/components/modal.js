import React,{useState} from 'react';

import { useING } from "../contexts/IngredientsContext"

const Modal=()=>{
  var today = new Date();

  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dateTime = date+' '+time;
  
  const [display,setDisplay]=useState("none")
  const {ingredients,price,prices} = useING()
  const handleDisplay=()=>{
    if(display==="none"){
      setDisplay("block")
    }else{      setDisplay("none")
  }
  
  }
  const sum = Object.values(ingredients).reduce(
    (previousScore, currentScore, index)=>previousScore+currentScore, 
    0);
  return (
    <div    onClick={handleDisplay}>



<button style={{opacity: sum<=0?"0.2":"1",cursor:sum<=0?"not-allowed":"pointer"}} disabled={!sum>0} class="button button4">ORDER NOW</button>


<div style={{display:display}}id="myModal" class="modal">


  <div   onClick={handleDisplay} className="modal-content">
 
     
    

<h1 style={{margin:"10px",textAlign:"center"}}>Your Order</h1>
<p style={{textAlign:"left"}}>{dateTime}</p>
<span style={{borderBottom:"1px solid grey",paddingBottom:"20px",fontWeight:"600"}} id="modalUlId" ><span id='modalUlIdChild1' ><span id="qte">QTY</span><span id="item">ITEM</span></span><span id='odalUlIdChild2'>PRICE</span></span>
{Object.keys(ingredients).map(
  (key)=>{
   return <div class="test"> <span id="modalUlId"  ><span   id="modalUlIdChild1"><span id="qte" >{ingredients[key]}</span><span  id="item">{key}</span></span><span   id='modalUlIdChild2'>${prices[key]> 0? prices[key] * ingredients[key]:"0" }</span></span></div>
   

  }
  
)}
<span style={{float:"right",display:"flex",marginLeft:"10px"}}  id='modalUlIdChild2'><span style={{fontWeight:"600"}}>Total</span>:${price}</span>

    
<button class="button">CHECKOUT</button>

</div>
</div>
    </div>
  )
}
export  default Modal

