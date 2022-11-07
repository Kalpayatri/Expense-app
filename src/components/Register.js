import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import {message} from 'antd'


const Register = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    try{
      await axios.post('/users/register',e)
      message.success('Registarion Successful')
    }catch(error){
      message.error('Login failed')

    }
    e.preventDefault()
    const formData = {
      username: username,
      email: email,
      password: password
    }
    setEmail('')
    setPassword('')
    setUsername('')
    
  }
  

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }





  return (
    <div className="register">
      <div className="row">

        <div className="col-md-5">

        </div>

        <div className="col-md-5">
          <form  layout="vertical" onSubmit={handleSubmit}>
          <h2>Register with us</h2>
          <hr/>

            <input type="text" placeholder="enter your name" value={username} onChange={handleChange} name="username" /><br />
            <input type="text" placeholder="enter your email" value={email} onChange={handleChange} name="email" /><br />
            <input type="text" placeholder="enter your password" value={password} onChange={handleChange} name="password" /><br />
            <input className="primary" type="submit" />
          </form>
          <br/>
          <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register