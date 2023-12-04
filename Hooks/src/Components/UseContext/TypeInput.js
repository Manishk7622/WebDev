import React from 'react'
import { useContext } from 'react'
import { Context } from './UseContext';

const TypeInput = () => {
    const {setName}= useContext(Context);
  return (
    <input type="text" className="contextInput"onChange={(e)=>setName(e.target.value)} />
  )
}

export default TypeInput