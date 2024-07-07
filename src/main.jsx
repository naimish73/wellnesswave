import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Pages/Blog.jsx';  
import Navbar from './Components/navbar.jsx';
import Contact from './Pages/Contact.jsx';
import FAQ from './Pages/FAQ.jsx'; 
import DiabetesPage from './Pages/Diabities.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}>

   </RouterProvider>
 
  </React.StrictMode>,
)
