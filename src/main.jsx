import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

// react-router import
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// redux import
import { Provider } from 'react-redux';
import store from './store/store.js';

import PrivateRoutes from './utils/PrivateRoutes.jsx';

// pages import 
import Blog from './Pages/Blog.jsx';
import Register from './Pages/Register.jsx';
import Contact from './Pages/Contact.jsx';
import FAQ from './Pages/FAQ.jsx';
import DiabetesPage from './Pages/Diabities.jsx';
import Login from './Pages/Login.jsx';
import Test from './Pages/Test.jsx';
import { AuthProvider } from './utils/AuthContext.jsx';
import Diabetes from './Pages/Diabetes/diabetes.jsx';
import Heartdisease from './Pages/HeartDisease/heartdisease.jsx';
import BreastCancer from './Pages/BreastCancer/breastcancer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      { path: '/', element: <App /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/dia', element: <DiabetesPage /> },
      { path: '/test', element: <Test /> },
      { path: '/diabetes', element: <Diabetes /> },
      { path: '/heartdisease', element: <Heartdisease /> },
      { path: '/breastcancer', element: <BreastCancer /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store} >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>

  </React.StrictMode>,
)
