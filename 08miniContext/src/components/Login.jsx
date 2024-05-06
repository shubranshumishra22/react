import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const {setUser} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()   //don't want and url going through post or anything
    setUser({username, pass})
}
  
    return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="Username"/>
        <input type='text' 
        value={pass}
        onChange={(e)=> setPass(e.target.value)}
        placeholder="Pass"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login