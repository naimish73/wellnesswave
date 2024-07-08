import * as React from 'react'

// React router dom imports
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

// Components
import Home from './pages/homepage/home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
// import Navbar from './Components/Navbar/Navbar'
import Disindex from './pages/DiseaseIndex/disindex'
import Diabetes from './pages/Diabetes/diabetes'

// Styles
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/disindex',
    element: <Disindex />
  },
  {
    path: '/diabetes',
    element: <Diabetes />
  },
  {
    path: '/test',
    element: <div>Test page</div>
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App
