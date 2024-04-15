import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    } else {
      console.log("Counter exceeds 20");
    }
  };

  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    } else {
      console.log("Counter value is negative");
    }
  };

  return (
    <>
      <h1>Shubranshu and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button className='addButton' 
      onClick={addValue}>
        Add Value
      </button>
      <button className='removeButton'
      onClick={reduceValue}>
        Remove Value</button>
      <p>Footer</p>
    </>
  );
}

export default App;