import React, {useRef,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

import './Signup/Signup.css'

const Register = () => {
  const registerForm = useRef(null)
  const {registerUser} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    
    if(password1 !== password2){
        alert('Passwords did not match!')
        return 
    }
    
    const userInfo = { name, email, password1};
    const result = await registerUser(userInfo)

   
    if(result.success) {
      navigate('/')
    } else {
      setError(result.error.message)
      alert(result.error.message)

    }
}

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form ref={registerForm} onSubmit={handleSubmit}>
             
              <label className='signup-label'>Username:</label>
              <br/>
              <input
                className='signup-input'
                name='name'
                type="text"
                placeholder="Enter username"
              />

            <br />

            <label className='signup-label'>Email:</label>
            <input
            name='email'
              className='signup-input'
              type="email"
              placeholder="Enter email"
            />

            <br />

            <label className='signup-label'>Password:</label>
            <input
              name='password1'
              className='signup-input'
              type="password"
              placeholder="Enter password"
            />
            <br />
            <label className='signup-label'>Confirm Password:</label>
            <input
              name='password2'
              className='signup-input'
              type="password"
              placeholder="Confirm password"
            />
            
            {error && <div className="error">{error}</div>}
            <button className='signup-btn' type="submit">Sign Up</button>
          </form>
          
          
          <Link to={'/login'}>
            Already have an account ? Log In Now
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Register