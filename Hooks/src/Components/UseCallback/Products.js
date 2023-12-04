import React from 'react'

const Products = React.memo(({name,addtoCart}) => {
    console.log(`${name}  product rendered`);
  return (
    <div>
       <h1>{name}</h1>
       <button onClick={addtoCart}>Add Item</button>

    </div>
  )
});

export default Products