import "./App.css";
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState(0)
  
  const handleDec = ()=> {
    if(value >0) setValue(value - 1)
  }
  const handleIncr = ()=> {
    setValue(value + 1)
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">{value}</h2>
      <button data-testid="counter-decrement-button" onClick={()=> handleDec()}>Decrement</button>
      <button data-testid="counter-increment-button" onClick={()=> handleIncr()}>Increment</button>
    </div>
  );
}

export default App;
