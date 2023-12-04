import React from 'react';
import './App.css';
import UseState from './Components/UseState';
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import UseEffect from './Components/UseEffect';
import UseContext from './Components/UseContext/UseContext';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback/UseCallback';
function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* < UseRef /> */}
      {/* < UseEffect /> */}
      {/* <UseContext /> */}
      {/* <UseMemo />  */}
      <UseCallback /> 
    </div>
  );
}

export default App;
