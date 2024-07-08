import React, { useEffect, useRef, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import './Login/Login.css';

const Login = () => {
  const {user, loginUser} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const loginForm = useRef(null)

  useEffect(() => {
    if (user){
      navigate('/')
    }
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    console.log('email', email)
    console.log('password', password)
    
    const userInfo = {email, password}
    const result = await loginUser(userInfo)
    if(result.success) {
      navigate('/')
    } else {
      setError(result.error.message)
    }
    
  }

  return (
    <>
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit} ref={loginForm}>
          <label className='ln-label'>Email Id:</label>
          <input
            name='email'
            className='ln-input'
            type="email"
            placeholder="Enter Your Email Id"
            
          />

          <br />
          <label className='ln-label'>Password:</label>
          <input
          name='password'
            className='ln-input'
            type="password"
            placeholder="Enter your password"
            
          />
          <br />
          {
            error && <p>{error}</p>
          }
          <button className='ln-btn' type="submit">Login</button>
        </form>

          <Link to={'/signup'}>
            Don't have an account ? Sign Up Now
          </Link>
      </div>
    </div>
    </>
  );
};

export default Login;
