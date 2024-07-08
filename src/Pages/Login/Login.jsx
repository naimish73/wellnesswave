import  { useState } from 'react';
import './Login.css';
import authService from '../../appwrite/auth';
import { Link,  useNavigate } from 'react-router-dom';
import { login as authLogin } from '../../store/authSlice';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import Navbar from '../../Components/navbar';

import { Input } from '@chakra-ui/react'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session =  authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    {/* <Navbar /> */}

    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <label className='ln-label'>Email Id:</label>
          <Input
            className='ln-input'
            type="email"
            placeholder="Enter Your Email Id"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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
          <button className='ln-btn' type="submit">Login</button>


        </form>

        <h2>

            <Link to={'/signup'}>
              Don't have an account ? Sign Up Now
            </Link>
          </h2>

      </div>
    </div>
    </>
  );
}

export default Login;
