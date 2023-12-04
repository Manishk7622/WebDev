import React, { useState,useRef,useEffect } from "react";

const UseRef = () => {
   
  const [currentInput, setInput] = useState("");
  const previousInput=useRef("");

  useEffect(() => {
    
    previousInput.current=currentInput;
    
  },[currentInput]);
  

  let onChange = (e) => {
    setInput(e.target.value);

  }


  return (
    <div>
      <input ref={previousInput} placeholder="enter " onChange={onChange} />
     <p>The input Value: {currentInput}</p>
     <p>The previous value: {previousInput.current}</p>
    </div>
  );
};

export default UseRef;
