import React from "react"
import Register from "./Register"
import Login from "./Login"
import DefaultLayout from "./DefaultLayout"

const Profile=(props)=>{
    return(
        <div>
            Profile
            <Register/>
            <Login/>
        </div>
    )
}
export default Profile