import UserContext from '../context/UserContext'
import React, {useContext} from 'react'

function Profile() {

    const {user} = useContext(UserContext)
    //only user bc only data not changing data is taken

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>

}

export default Profile