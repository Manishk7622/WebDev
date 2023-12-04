import React, { useState } from 'react'
import { createContext } from 'react';
import TypeInput from './TypeInput';
import ViewInput from './ViewInput';
export const Context=createContext(null);
const UseContext = () => {
    const[name,setName]=useState("");
  return (
    <Context.Provider value={{name,setName}}>
    <TypeInput />
    <ViewInput />
    </Context.Provider>
  )
}

export default UseContext



  