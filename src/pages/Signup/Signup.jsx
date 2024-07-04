import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';


function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      setError('Please agree to terms of use & privacy policy');
      return;
    }
    if (password!== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (email!== '' && password!== '' && username!== '' ) {
      authService.createAccount({email,confirmPassword,username });
    }
    // Call API to create new user
    // For demo purposes, just simulate a successful signup
    console.log('Signup successful!');
    navigate('/');
  };

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className='fn-ln'>
             
              <label className='signup-label'>Username:</label>
              <input
                className='signup-input'
                name='username'
                type="text"
                placeholder="Enter username"
              />
            </div>

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
              name='password'
              className='signup-input'
              type="password"
              placeholder="Enter password"
            />
            <br />
            <label className='signup-label'>Confirm Password:</label>
            <input
              name='confirmPassword'
              className='signup-input'
              type="password"
              placeholder="Confirm password"
            />
            <br />
            <div className="signup-agree">
              <input  
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p>By continuing, I agree to terms of use & privacy policy.</p>
            </div>
            {error && <div className="error">{error}</div>}
            <button className='signup-btn' type="submit">Continue</button>
          </form>
          
          
          <Link to={'/signup'}>
            Don't have an account ? Sign Up Now
          </Link>
          
        </div>
      </div>
    </div>
  );
}
export default Signup;
