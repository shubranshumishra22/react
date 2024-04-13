import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//if you want to create element without React.createElement()
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//        href: 'https://google.com',
//        target: '_blank'
//     },
//     children: 'click me to visit Google'
// }

const anotherUser = "chai aur React"

//method to create tree in React(done auto but here we have written by our own)
const reactElement= React.createElement(
    'a',
    {href: 'https://google.com', target : '_blank'}
    'click me to visit Google',
    anotherUser 
)

//normal HTML, which is also working
const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  
    // anotherElement
    // <MyApp />  //also can be written as MyApp() , bc function

    <App />
)
