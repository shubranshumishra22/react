import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  // Reference hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let generatedPass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+?{}";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      generatedPass += str.charAt(char);
    }

    setPass(generatedPass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    // Selecting the password input field
    passRef.current?.select();

    // Setting the selection range
    passRef.current?.setSelectionRange(0, pass.length);

    // Copying the password to clipboard
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

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
          ref={passRef}
          onClick={copyPasswordToClipboard}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
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
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
