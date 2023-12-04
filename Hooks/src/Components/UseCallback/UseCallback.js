import React from 'react'
import Products from './Products';
import { useState,useCallback } from 'react';
const UseCallback = () => {
   const[item,setItem]=useState(["Item 1","Item 2"]);
   const[count,setCount]=useState(0);
   const[cart,setCart]=useState(0);

   const addtoCart=useCallback(()=>{
      setCart(cart+1);
   },[cart]);
  return (
    <div>
      <h4>Count:{count}</h4>
      <button onClick={() =>setCount(count+1)}>count +</button>

      <h4>Cart:{cart}</h4>
    <div className="ItemContainer">
      {item.map((data,i)=>{
         return <Products name={data} key={i} addtoCart={addtoCart}/>;
      })}

    </div>

    </div>
  )
}

export default UseCallback