import React from 'react'
import { useState,useEffect } from 'react';
const UseEffect = () => {
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);
   
    let showWidth=()=>{
        setWidth(window.innerWidth);
    }

    let showHeight=()=>{
        setHeight(window.innerHeight);
    }
  
    useEffect(()=>{

      console.log("rendered");
        window.addEventListener('resize',showWidth)
        window.addEventListener('resize',showHeight)
    },[])
  return (
    <>
    <div>Width:{width}</div>
    <div>Height:{height}</div>
    </>
  )
}

export default UseEffect