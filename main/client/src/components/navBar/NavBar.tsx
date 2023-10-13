import React from 'react'
import "./navBar.css"
import logo from "../../assets/image 16.png"
import { Link, useLocation } from "react-router-dom";
type props ={
  setIsLoggedIn:(value: boolean) => void;
};
const NavBar:React.FC<props> = ({setIsLoggedIn}) => {
  const logged = localStorage.getItem("token")
  const location = useLocation()
  const logout =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
  }
  return (

    <div className='Top-Navbar'>
      <div className='logo'>
        <img src={logo} />
        <p style={{ color: "#007E85" }}>  Health</p>

        <p style={{ color: "#6EAB36" }}  >Care</p>
      </div>
      <div className='Navbar-Links'>
        {!(location.pathname === "/") ? <div><Link style={{ textDecoration: "none" }} to={"/"}><a>Home</a></Link></div> : null}
        {!(location.pathname === "/service") ? <div><Link style={{ textDecoration: "none" }} to={"/service"}><a>Service</a></Link></div> : null}
        {!(location.pathname === "contactus")?<div> <Link style={{ textDecoration: "none" }} to="/contactus"><a>Contact Us</a></Link></div> : null}
        <div><a>Help</a></div>
        <div><a>Blogs</a></div>
      </div>
      {!logged ?
        <div className='Navbar-Button'>
          <Link style={{ textDecoration: "none" }} to="/signUp">
            <button className='singup'>Sing Up</button>
          </Link>
          <Link to="/login">
            <button className='login'>Log In</button>
          </Link>
        </div> : <div className='Navbar-Button'>
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className='login' onClick={()=>logout()}>Log out</button>
          </Link>
        </div>}
    </div>


  )
}

export default NavBar