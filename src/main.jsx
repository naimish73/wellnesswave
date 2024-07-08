import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Pages/Blog.jsx';  
// import Navbar from './Components/navbar.jsx';
import Contact from './Pages/Contact.jsx';
import FAQ from './Pages/FAQ.jsx'; 
import DiabetesPage from './Pages/Diabities.jsx';
import Login from './Pages/Login/Login.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Signup from './Pages/Signup/Signup.jsx';
import Test from './Pages/Test.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
      path: "/blog",
      element:<Blog />,
  },
  {
    path: "/Contact",
    element:<Contact />,
},
{
  path: "/FAQ",
  element:<FAQ />,
},
{
  path: "/dia",
  element:<DiabetesPage />,
},
{
  path: "/login",
  element:<Login />,
},
{
  path: "/signup",
  element:<Signup />,
},
{
  path: "/test",
  element:<Test />,
},
{
  path: "/blog",
  element:<Blog />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store} >
   <RouterProvider router={router}>

   </RouterProvider>
   </Provider>
  
  </React.StrictMode>,
)
