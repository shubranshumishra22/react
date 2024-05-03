import React, { useState } from 'react'; // Import React and useState

function App() {
  // Use useState hook to manage state
  const [counter, setCounter] = useState(15);

  // Define functions to handle increment and decrement
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Counter exceeds 20");
    }
  };

  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Counter value is negative");
    }
  };

  return (
    <>
      <h1>Shubranshu and React</h1>
      <h2>Counter Value: {counter}</h2>

      {/* Attach event handlers to buttons */}
      <button className='addButton' onClick={addValue}>
        Add Value
      </button>
      <button className='removeButton' onClick={reduceValue}>
        Remove Value
      </button>
      <p>Footer</p>
    </>
  );
}

export default App;
