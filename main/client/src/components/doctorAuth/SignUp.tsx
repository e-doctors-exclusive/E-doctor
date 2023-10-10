import React, { useState } from 'react';
import './doctorAuth.css';
 const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleSignInUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='hi'>
      <h2 className='hello'>Sign in/up !</h2>
      <div className={`container-signups ${isSignUp ? 'right-panel-active' : ''}`} id="container-signups">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className='sign-in'>Create Account</h1>
            <span className='spans'>or use your account</span>
            <input type="text" placeholder="Name" />
            <select  id="fields" >
            <option defaultValue="" defaultChecked disabled hidden>Choose Your Field</option>
                <option value="dentist">Dentist</option>
                <option value="surgeon">Surgeon</option>
                <option value="">Psychiatrist</option>
                <option value="">Cardiologist</option>
            </select>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="lol">Sign Up</button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${isSignUp ? '' : 'right-panel-active'}`}>
          <form action="#" className='forms'>
            <h1 className='sign-in'>Sign in</h1>
            <span className='spans'>or use your email for registration</span>
            <input type="email" placeholder="Email" className='text-signup'/>
            <input type="password" placeholder="Password" className='text-signup'/>
            <a href="#">Forgot your password?</a>
            <button className="lol">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUp ? '' : 'right-panel-active'}`}>
              <h1 className='sign-in'>Welcome Back Doctor!</h1>
              <p className='instructions'>To keep connected with us, please log in with your personal info</p>
              <button className="lol" onClick={toggleSignInUp}>Sign In</button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUp ? 'right-panel-active' : ''}`}>
              <h1 className='sign-in'>Hello, Doctor!</h1>
              <p className='instructions'>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={toggleSignInUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp
