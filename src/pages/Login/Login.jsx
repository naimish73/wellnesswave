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

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to authenticate user
    // For demo purposes, just simulate a successful login
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label className='ln-label'>Username:</label>
          <input
            className='ln-input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <br />
          <label className='ln-label'>Password:</label>
          <input
            className='ln-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
          {error && <div className="error">{error}</div>}
          <button className='ln-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;