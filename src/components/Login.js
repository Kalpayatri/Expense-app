import React, { useState } from "react";
import { Link,} from "react-router-dom";
import axios from "axios"
import {message} from 'antd'


const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    try{
      const response= await axios.post('/users/login',e)
      localStorage.setItem(JSON.stringify({...response.data, password:''}))
      message.success('Login Successful')
    }catch(error){
      message.error('something went wrong')

    }
    e.preventDefault()
    const formData = {
      email: email,
      password: password
    }
    setEmail('')
    setPassword('')
    console.log(formData)
  }


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  return (
    <div className="login">
      <div className="row">

        <div className="col-md-5">

        </div>
        <div className="col-md-5">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <hr />
            <input type="text" placeholder="enter your email" value={email} onChange={handleChange} name="email" /><br />
            <input type="text" placeholder="enter your password" value={password} onChange={handleChange} name="password" /><br />
            <input type="submit" />
          </form>
          <br />
          <p>Don't have an account? <Link to="/Register">Register</Link></p>


        </div>
      </div>
    </div>
  )
}

export default Login