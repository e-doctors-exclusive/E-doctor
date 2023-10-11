import React, { useState } from 'react';
import './doctorAuth.css';
import img01 from "../../assets/Firefly_3d_introduction_of_hospital_with_no_background_56890-removebg-preview.png";
import img02 from "../../assets/Firefly_3d_image_of_doctor_67408-removebg-preview.png"
export const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [img, setImg] = useState(true)
  const toggleSignInUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='SignContainer'>
      {/* <h2 className='Sign_h2'>Sign in/up !</h2> */}
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
        <form className='Sign_Form' action="#">
            <h1 className='Sign_h1'>Sign Up</h1>
            <span className='Sign_span'>Down here</span>
            <input className='Sign_input' type="text" placeholder="Name" />
            <input className='Sign_input' type="text" placeholder="lastName" />
            <input className='Sign_input' type="text" placeholder="Address" />
            <input className='Sign_input' type="email" placeholder="Email" />
            <input className='Sign_input' type="password" placeholder="Password" />
            <button className='Sign_button'>Submit</button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${isSignUp ? '' : 'right-panel-active'}`}>
        <form className='Sign_Form' action="#">
            <h1 className='Sign_h1'>Sign Up</h1>
            <span className='Sign_span'>Down here</span>
            <input className='Sign_input' type="text" placeholder="Name" />
            <input className='Sign_input' type="text" placeholder="lastName" />
            <input className='Sign_input' type="text" placeholder="Address" />
            <select id="fields" >
              <option value="" selected disabled hidden>Choose Your Field</option>
              <option value="dentist">Dentist</option>
              <option value="surgeon">Surgeon</option>
              <option value="">Psychiatrist</option>
              <option value="">Cardiologist</option>
            </select>
            <input className='Sign_input' type="email" placeholder="Email" />
            <input className='Sign_input' type="password" placeholder="Password" />
            <button className='Sign_button'>Submit</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUp ? '' : 'right-panel-active'}`}>
              <h1 className='Sign_h1'>Your wellbeing our priority.</h1>
              <p>Hello, let’s take the first step towards your wellbeing together!</p>
              <button className="Sign_button ghost" onClick={() => { toggleSignInUp(); setImg(!img); }}>Login</button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUp ? 'right-panel-active' : ''}`}>
              <h1 className='Sign_h1'>Hello, Doctor!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="Sign_button ghost" onClick={() => { toggleSignInUp(); setImg(!img); }}>Sign Up</button>

            </div>
          </div>
        </div>
      </div>
      <div className='Sing_img_container'>
        {img ?
          <img className='Sign_img' src={img01}></img> : <img className='Sign_img' src={img02}></img>}
      </div>
    </div>
  );
};