import React from 'react'
import './Navbar.css'
// import logo from '../assets'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    
    // const [menu,setmenu] = useState("home");
    const navigate = useNavigate()
    const handleOnClick1 = () => {
        navigate('/login')
    }
    const handleOnClick2 = () => {
        navigate('/signup')
    }

  return (
    <div className="navbar">
        <div className="nav-logo">
            {/* <img src={logo} alt="" /> */}
            <p>WellnessWave</p>
        </div>
        <ul className='nav-menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/help">Help</Link>

            {/* <li onClick={()=>{setmenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("about")}}>About Us{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("help")}}>Help{menu==="help"?<hr/>:<></>}</li> */}
            <button onClick={handleOnClick1}>Login</button>
            <button onClick={handleOnClick2}>Sign Up</button>
        </ul>
    </div>
  )
}
export default Navbar;
