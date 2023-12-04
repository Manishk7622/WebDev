import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { count: state.count + 1, showText: state.showText };
    case "Text":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increase" });
          dispatch({ type: "Text" });
        }}
      >
        Click Me!
      </button>

      {state.showText && <p>Hello Manish</p>}
    </div>
  );
};

export default UseReducer;