import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

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
    // Call API to create new user
    // For demo purposes, just simulate a successful signup
    console.log('Signup successful!');
  };

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className='fn-ln'>
              <label className='signup-label'>First Name:</label>
              <input
                className='signup-input'
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
              />
              <br />
              <label className='signup-label'>Last Name:</label>
              <input
                className='signup-input'
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
              />
            </div>
            <br />
            <label className='signup-label'>Email:</label>
            <input
              className='signup-input'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <br />
            <label className='signup-label'>Password:</label>
            <input
              className='signup-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <br />
            <label className='signup-label'>Confirm Password:</label>
            <input
              className='signup-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
      </div>
    </div>
  );
}
export default Signup;
