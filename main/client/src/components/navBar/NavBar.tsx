import React from 'react'
import "./navBar.css"
import logo from "../../assets/image 16.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

        <div className='Top-Navbar'>
            <div className='logo'>
             <img  src={logo} /> 
              <p  style={{color: "#007E85"}}>  Health</p>
             
              <p style={{color: "#6EAB36"}}  >Care</p>
            </div>
            <div className='Navbar-Links'>
              <Link style={{textDecoration:"none"}} to={"/homePage"}>
            <a>Home</a>
            </Link>
            <Link style={{textDecoration:"none"}} to={"/service"}>
            <a>Service</a>
            </Link>
            <Link style={{textDecoration:"none"}} to="/contactus">
            <a>Contact Us</a>
            </Link>
            <a>Help</a>
            <a>Blogs</a>
            </div>
          <div className='Navbar-Button'>
          <Link style={{textDecoration:"none"}} to="/signUp">
            <button className='singup'>Sing Up</button>
           </Link>
           <Link  to="/login">
            <button className='login'>Log In</button>
            </Link>
          </div>
        </div>


    )
}

export default NavBar