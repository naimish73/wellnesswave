import React from 'react'

export const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <div className='signup-fields'>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Your email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
            </div>
            <button>Continue</button>
            <p className='signup-login'>Already have an account? <span>Login Here</span></p>
            <div className='signup-agree'>
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
  )
}
