import React from 'react'
import './Navbar.css'
import logo from '../assets/'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>WellnessWave</p>
        </div>
        <ul className=''></ul>
    </div>
  )
}
