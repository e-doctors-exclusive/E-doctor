import React from 'react'
import "./navBar.css"
import logo from "../../assets/image 16.png"
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const logged =localStorage.getItem("token")
  const location= useLocation()
  console.log(location.pathname==="/");
  
  return (

        <div className='Top-Navbar'>
            <div className='logo'>
             <img  src={logo} /> 
              <p  style={{color: "#007E85"}}>  Health</p>
             
              <p style={{color: "#6EAB36"}}  >Care</p>
            </div>
           {!(location.pathname==="/")? <div className='Navbar-Links'>
              <Link style={{textDecoration:"none"}} to={"/"}>
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
            </div>: <div className='Navbar-Links'>
            <Link style={{textDecoration:"none"}} to={"/service"}>
            <a>Service</a>
            </Link>
            <Link style={{textDecoration:"none"}} to="/contactus">
            <a>Contact Us</a>
            </Link>
            <a>Help</a>
            <a>Blogs</a>
            </div>}
         {!logged? 
          <div className='Navbar-Button'>
         <Link style={{textDecoration:"none"}} to="/signUp">
            <button className='singup'>Sing Up</button>
           </Link>
           <Link  to="/login">
            <button className='login'>Log In</button>
            </Link>
          </div>:null}
        </div>


    )
}

export default NavBar