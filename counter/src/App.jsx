import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  const addValue = () => {
    setCounter(counter+1);
    console.log("Value Changed to :" + counter);
  }

  const subtractValue = () =>{
    if(counter===0){
      console.log("Counter Value cannot be less than 0");
      return;
    }
    setCounter(counter-1);
    console.log("Value Changed to :" + counter);
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value </button>
    <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
