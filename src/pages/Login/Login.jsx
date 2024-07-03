// import React from 'react'

// const Login = () => {
//   return (
//     <div className='login'>
//         <div className='login-container'>
//             <h1>Login</h1>
//             <div className='login-fields'>
//                 <input type="text" placeholder="Username" />
//                 <input type="password" placeholder="Password" />
//             </div>
//             <button>Login</button>
//             <p className='login-signup'>Don't have an account? <span>Sign Up Here</span></p>
//         </div>
//     </div>
//   )
// }
// export default Login;
import React, { useState } from 'react';
import './Login.css';
import authServices from '../../appwrite/auth';
// import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../../store/authSlice'
// import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux";
// import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call API to authenticate user
//     // For demo purposes, just simulate a successful login
//     if (username === 'admin' && password === 'password') {
//       console.log('Login successful!');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async(data) => {
      setError("")
      try {
          const session = await authService.login(data)
          if (session) {
              const userData = await authService.getCurrentUser()
              if(userData) dispatch(authLogin(userData));
              navigate("/")
          }
      } catch (error) {
          setError(error.message)
      }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)}>
          <label className='ln-label'>Email Id:</label>
          <input
            className='ln-input'
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Email Id"
            {...register("email", {
              required: true,
              validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
          })}
          />
          <br />
          <label className='ln-label'>Password:</label>
          <input
            className='ln-input'
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <br />
          {/* {error && <div className="error">{error}</div>} */}
          <button className='ln-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;