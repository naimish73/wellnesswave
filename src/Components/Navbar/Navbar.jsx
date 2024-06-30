import React from 'react'
import './Navbar.css'
// import logo from '../assets'

const Navbar = () => {
    
    const [menu,setmenu] = useState("home");

  return (
    <div className="navbar">
        <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
            <p>WellnessWave</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("about")}}>About Us{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("help")}}>Help{menu==="help"?<hr/>:<></>}</li>
            <button>Login</button>
            <button>Sign Up</button>
        </ul>
    </div>
  )
}
export default Navbar;
