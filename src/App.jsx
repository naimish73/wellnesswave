import * as React from 'react'

// React router dom imports
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

// Components
import Home from './pages/homepage/home'

// Styles
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
