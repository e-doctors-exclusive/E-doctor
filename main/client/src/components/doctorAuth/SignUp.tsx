import React, { useState } from 'react';
import './doctorAuth.css';

export const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignInUp = () => {
    setIsSignUp(!isSignUp) 
  };

  return (
    <div className='SignContainer'>
      <h2 className='Sign_h2'>Sign in/up !</h2>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form className='Sign_Form' action="#">
            <h1 className='Sign_h1'>Create Account</h1>
            <span className='Sign_span'>or use your account</span>
            <input className='Sign_input' type="text" placeholder="Name" />
            <select  id="fields" >
            <option value="" selected disabled hidden>Choose Your Field</option>
                <option value="dentist">Dentist</option>
                <option value="surgeon">Surgeon</option>
                <option value="">Psychiatrist</option>
                <option value="">Cardiologist</option>
            </select>
            <input className='Sign_input' type="email" placeholder="Email" />
            <input className='Sign_input' type="password" placeholder="Password" />
            <button className='Sign_button'>Sign Up</button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${isSignUp ? '' : 'right-panel-active'}`}>
          <form className='Sign_Form' action="#">
            <h1 className='Sign_h1'>Sign in</h1>
            <span className='Sign_span'>or use your email for registration</span>
            <input className='Sign_input' type="email" placeholder="Email" />
            <input className='Sign_input' type="password" placeholder="Password" />
            <p className='Sing_text'>Forgot your password?</p>
            <button className='Sign_button'>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUp ? '' : 'right-panel-active'}`}>
              <h1 className='Sign_h1'>Welcome Back Doctor!</h1>
              <p>To keep connected with us, please log in with your personal info</p>
              <button className=" Sign_button ghost " onClick={toggleSignInUp}>Sign In</button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUp ? 'right-panel-active' : ''}`}>
              <h1 className='Sign_h1'>Hello, Doctor!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button  className=" Sign_button ghost " onClick={toggleSignInUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};