import React, { useState } from 'react';
import './doctorAuth.css';

export const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignInUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='SignContainer'>
    <div >
      <h2>Sign in/up !</h2>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your account</span>
            <input type="text" placeholder="Name" />
            <select  id="fields" >
            <option value="" defaultChecked disabled hidden>Choose Your Field</option>
                <option value="dentist">Dentist</option>
                <option value="surgeon">Surgeon</option>
                <option value="">Psychiatrist</option>
                <option value="">Cardiologist</option>
            </select>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${isSignUp ? '' : 'right-panel-active'}`}>
          <form action="#">
            <h1>Sign in</h1>
            <span>or use your email for registration</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUp ? '' : 'right-panel-active'}`}>
              <h1>Welcome Back Doctor!</h1>
              <p>To keep connected with us, please log in with your personal info</p>
              <button className="ghost" onClick={toggleSignInUp}>Sign In</button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUp ? 'right-panel-active' : ''}`}>
              <h1>Hello, Doctor!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={toggleSignInUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
