import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj= {
    username : "shub22",
    age : 21,
  };

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2.5'>Tailwind Test</h1>
    <Card name="shubranshu" btnText= "visit me" someObj={myObj}/>
    <Card btnText= "click me"/>
    </>
  )
}

export default App
