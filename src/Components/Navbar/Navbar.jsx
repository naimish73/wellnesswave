import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const username = await authService.getCurrentUser();
      setUsername(username?.name || null);
    };
    fetchUser();
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    await authService.logout();
    setUsername(null);
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>WellnessWave</p>
      </div>
      <ul className='nav-menu'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/help">Help</Link>
        <h1>Hello , {username}</h1>
        {username ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
