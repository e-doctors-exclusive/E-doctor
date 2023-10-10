import React from 'react'
import "./navBar.css"
import logo from "../../assets/image 16.png"
const NavBar = () => {
  return (

        <div className='Top-Navbar'>
            <div className='logo'>
             <img  src={logo} /> 
              <p  style={{color: "#007E85"}}>  Health</p>
             
              <p style={{color: "#6EAB36"}}  >Care</p>
            </div>
            <div className='Navbar-Links'>
            <a>Home</a>
            <a>Service</a>
            <a>Contact Us</a>
            <a>Help</a>
            <a>Blogs</a>
            </div>
          <div className='Navbar-Button'>
            <button className='singup'>Sing Up</button>
            <button className='login'>Log In</button>
          </div>
        </div>


    )
}

export default NavBar