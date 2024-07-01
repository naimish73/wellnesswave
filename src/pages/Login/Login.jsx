import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <h1>Login</h1>
            <div className='login-fields'>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Login</button>
            <p className='login-signup'>Don't have an account? <span>Sign Up Here</span></p>
        </div>
    </div>
  )
}
export default Login;