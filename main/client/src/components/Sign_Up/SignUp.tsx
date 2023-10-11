import React, { useState } from 'react';
import Select from 'react-select';
import { SingleValue, ActionMeta } from 'react-select';
import "../Sign_Up/SignUp.css"
import img01 from "../../assets/3d-render-little-boy-with-glasses-briefcase-removebg-preview.png";
import img02 from "../../assets/3d-render-little-boy-with-stethoscope-medicine-bag-removebg-preview.png"
import Footer from '../footer/Footer';
import axios from 'axios';
const eyeClosed = <svg className='password_svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
const eyeOpen = <svg className='password_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" /></svg>
type OptionType = {
  label: string;
  value: string;
};
const UserInitialValues = {
  name: "",
  lastName: "",
  Address: "",
  email: "",
  password: "",
};
const DoctorInitialValues = {
  name: "",
  lastName: "",
  Address: "",
  email: "",
  password: "",
  MedicalInfo: "",
};
const options = [
  { value: 'Neurosurgeons', label: 'Neurosurgeons' },
  { value: 'Thoracic Surgeons', label: 'Thoracic Surgeons' },
  { value: 'Orthopedic Surgeons', label: 'Orthopedic Surgeons' },
  { value: 'Plastic Surgeons', label: 'Plastic Surgeons' },
  { value: 'Oral and Maxillofacial Surgeons', label: 'Oral and Maxillofacial Surgeons' },
  { value: 'Family Physicians', label: 'Family Physicians' },
  { value: 'Internists', label: 'Internists' },
  { value: 'Emergency Physicians', label: 'Emergency Physicians' },
  { value: 'Psychiatrists', label: 'Psychiatrists' },
  { value: 'Obstetricians', label: 'Obstetricians' },
  { value: 'Dentists', label: 'Dentists' }
];
export const SignUp = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isSignUp, setIsSignUp] = useState(true);
  const [img, setImg] = useState(true);
  const [eye, setEye] = useState(true);
  const [docEye, setDocEye] = useState(true)
  const [userValues, setUserValues] = useState(UserInitialValues);
  const [doctorValues, setDoctorValues] = useState(DoctorInitialValues);

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value
    });
  }
  const handleDoctorInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDoctorValues({
      ...doctorValues,

      [name]: value
    });
  }
  const handleSelectInputChange = (selectedOption: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
    const option = selectedOption as OptionType;
    if (actionMeta.name) {
      setDoctorValues({
        ...doctorValues,
        [actionMeta.name]: option.value
      });
    }
  };



  const TogglePass = () => {
    const passwordInput = document.querySelector(".user_password_input") as HTMLInputElement;
    if (passwordInput) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  };
  const DoctorTogglePass = () => {
    const passwordInput = document.querySelector(".password_input") as HTMLInputElement;
    if (passwordInput) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  };

  const SubmitUser = async (e: React.MouseEvent<HTMLButtonElement>, input: object) => {
    e.preventDefault();
    var res = true
    const check01 = () => {
      Object.values(input).some(element => {
        if (element === "") {
          res = false
        }
      });
      return res
    }

    if (check01()) {

      try {
        const task = await axios.post("http://localhost:3000/api/patient/addPatient", input);
        console.log(task.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const SubmitDoctor = async (e: React.MouseEvent<HTMLButtonElement>, input: object) => {
    e.preventDefault();
    console.log(input);
    var res = true
    const check01 = () => {
      Object.values(input).some(element => {
        if (element === "") {
          res = false
        }
      });
      return res
    }
    if (check01()) {
      try {
        const task = await axios.post("http://localhost:3000/api/doctor/addDoctor", input);
        console.log(task.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const toggleSignInUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <div className='SignContainer'>
        {/* <h2 className='Sign_h2'>Sign in/up !</h2> */}
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
          <div className="form-container sign-up-container">
            <form className='Sign_Form' >
              <h1 className='Sign_h1'>Sign Up</h1>
              <span className='Sign_span'>Down here</span>
              <input className='Sign_input' onChange={(e) => handleUserInputChange(e)} name='name' type="text" placeholder="Name" />
              <input className='Sign_input' onChange={(e) => handleUserInputChange(e)} name='lastName' type="text" placeholder="lastName" />
              <input className='Sign_input' onChange={(e) => handleUserInputChange(e)} name='Address' type="text" placeholder="Address" />
              <input className='Sign_input' onChange={(e) => handleUserInputChange(e)} name='email' type="email" placeholder="Email" />
              <input className='Sign_input user_password_input' onChange={(e) => handleUserInputChange(e)} name='password' type="password" placeholder="Password" />
              <div className='password_div' onClick={() => (TogglePass(), setEye(!eye))}>{
                eye ?
                  eyeOpen : eyeClosed
              }

              </div>



              <button className='Sign_button' onClick={(e) => SubmitUser(e, userValues)
              }>Submit</button>
            </form>
          </div>
          <div className={`form-container sign-in-container ${isSignUp ? '' : 'right-panel-active'}`}>
            <form className='Sign_Form' >
              <h1 className='Sign_h1'>Sign Up</h1>
              <span className='Sign_span'>Down here</span>
              <input className='Sign_input' type="text" onChange={handleDoctorInputChange} name='name' placeholder="Name" />
              <input className='Sign_input' type="text" onChange={handleDoctorInputChange} name='lastName' placeholder="lastName" />
              <input className='Sign_input' type="text" onChange={handleDoctorInputChange} name='Address' placeholder="Address" />
              <Select name='MedicalInfo' className='Sign_select'
                defaultValue={selectedOption}
                onChange={handleSelectInputChange}
                options={options}
              />
              {/* <select name='MedicalInfo' onChange={handleDoctorInputChange} id="fields" >
              <option value="what is your field"  defaultChecked disabled >Profession</option>
              <option value="Neurosurgeons">Neurosurgeons</option>
              <option value="Thoracic Surgeons">Thoracic Surgeons</option>
              <option value="Orthopedic Surgeons">Orthopedic Surgeons</option>
              <option value="Plastic Surgeons">Plastic Surgeons</option>
              <option value="Oral and Maxillofacial Surgeons">Oral and Maxillofacial Surgeons</option>
              <option value="Family Physicians">Family Physicians</option>
              <option value="Internists">Internists</option>
              <option value="Emergency Physicians">Emergency Physicians</option>
              <option value="Psychiatrists">Psychiatrists</option>
              <option value="Obstetricians">Obstetricians</option>
              <option value="Dentists">Dentists</option>
            </select> */}
              <input className='Sign_input' type="email" onChange={handleDoctorInputChange} name='email' placeholder="Email" />
              <input className='Sign_input password_input' onChange={handleDoctorInputChange} name='password' type="password" placeholder="Password" />
              <div className='password_div' onClick={() => (DoctorTogglePass(), setDocEye(!docEye))}>{
                docEye ?
                  eyeOpen : eyeClosed
              }

              </div>
              <button type="button" className='Sign_button' onClick={(e) => SubmitDoctor(e, doctorValues)
              }>Submit</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className={`overlay-panel overlay-left ${isSignUp ? '' : 'right-panel-active'}`}>
                <h1 className='Sign_h1'>Your wellbeing our priority.</h1>
                <p>Hello, let’s take the first step towards your wellbeing together!</p>
                <button className="Sign_button ghost" onClick={() => { toggleSignInUp(); setEye(true); setImg(!img); }}>Doctor Registration</button>
              </div>
              <div className={`overlay-panel overlay-right ${isSignUp ? 'right-panel-active' : ''}`}>
                <h1 className='Sign_h1'>Hello, Doctor!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button className="Sign_button ghost" onClick={() => { toggleSignInUp(); setImg(!img); setDocEye(true) }}>Patient Registration</button>

              </div>
            </div>
          </div>
        </div>
        <div className='Sing_img_container'>
          {img ?
            <img className='Sign_img' src={img01}></img> : <img className='Sign_img' src={img02}></img>}
        </div>
      </div>
      <Footer />
    </div>

  );
};