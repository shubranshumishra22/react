
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setthemeMode] = useState('light')

   //defining actual functionality!!

const lightTheme = () => {
  setthemeMode("light")
}

const darkTheme = () => {
  setthemeMode("dark")
}

    //actualtheme change   

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])  //dependecy means if there is any change in themeMode useEffect will be called

  

  return (

          //called methods from theme.js

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

        

    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                         <Card />
                    </div>
                </div>
    </div>
    </ThemeProvider>
  )
}

export default App
