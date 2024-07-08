import  { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';


import { Input } from '@chakra-ui/react'

function Signup() {
  const [username, setUsername] = useState('');
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


             
              <label className='signup-label'>Username:</label>
              <Input
                className='signup-input'
                name='username'
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
          

            <br />

            <label className='signup-label'>Email:</label>
            <Input
            name='email'
              className='signup-input'
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <label className='signup-label'>Password:</label>
            <Input
              name='password'
              className='signup-input'
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label className='signup-label'>Confirm Password:</label>
            <Input
              name='confirmPassword'
              className='signup-input'
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div className="signup-agree">
              <Input  
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p>By continuing, I agree to terms of use & privacy policy.</p>
            </div>
            {error && <div className="error">{error}</div>}
            <button className='signup-btn' type="submit">Sign Up</button>
          </form>
          
          <h2>

            <Link to={'/login'}>
              Already have an account ? Login Now
            </Link>
          </h2>
          
        </div>
      </div>
    </div>
  );
}
export default Signup;
