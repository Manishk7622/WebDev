import React, { useState } from "react";

const UseState = () => {
  const [input, setValue] = useState("");
  const [name, setName] = useState("Manish");
  
   let handleInput = (event) => {
    setValue(event.target.value);
  }
  
  let updateName = (event) => {
    event.preventDefault();
    setName(input);
    setValue("");
  }
  
  return (
    <div className="box">
      <h1>
        Hello, <span>{name}!</span>   
      </h1>
      
      <form className="form">
        
        <div >
          <label>Enter Something</label>
          <div >
            <input type="text" placeholder="Write a Name" value={input}  onChange={handleInput} className="input1"/>
          </div>
        </div>
        <div >
          <div >
            <button onClick={updateName} className="button1 " >Save</button>
          </div>
        </div>
      </form>
       
    </div>
  )
};
  

export default UseState;