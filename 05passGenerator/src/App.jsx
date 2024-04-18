import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  //useRef hook
  
  const passwordGenerator = useCallback(() => {
    let  generatedPass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+?{}";
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPass += str.charAt(char);
    }

    setPass(generatedPass)

  }, [length, numAllowed, charAllowed]);

return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5'
          onClick={copyPassword}>Copy</button>
      </div> 
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type= "range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          //adding on change event so that the values change as we use curser
          on onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex iteams-center gap-x-1'> 
        <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
            <div className="flex items-center gap-x-1">
              <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev) //call back fired because the event needs to get to it's prev values(tic and untic)
              }}
              />
           <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
 
  )
}

export default App;
