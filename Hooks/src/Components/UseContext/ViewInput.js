import React from 'react'
import { useContext} from 'react'
import { Context } from './UseContext';

const ViewInput = () => {
    const {name}=useContext(Context);
  return (
    <div className='contextView'>Result:{name}</div>
  )
}

export default ViewInput