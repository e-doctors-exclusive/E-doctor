// import React, { useState } from 'react'
// import "./Login.css"
// import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// const eyeClosed = <svg xmlns="http://www.w3.org/2000/svg" className='login_icon_svg' viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
// const eyeOpen = <svg xmlns="http://www.w3.org/2000/svg" className='login_icon_svg' viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" /></svg>
// const bridge = <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512"><path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H72v64H0V288c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V384c0-53 43-96 96-96s96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V384c0-53 43-96 96-96V160H504V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM456 96v64H376V96h80zM328 96v64H248V96h80zM200 96v64H120V96h80z" /></svg>
// const patient = <svg xmlns="http://www.w3.org/2000/svg" className='login_icon_svg' height="4em" viewBox="0 0 576 512"><path d="M48 0C21.5 0 0 21.5 0 48V256H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v64H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v80c0 26.5 21.5 48 48 48H265.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM152 64h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H184v24c0 8.8-7.2 16-16 16H152c-8.8 0-16-7.2-16-16V152H112c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16h24V80c0-8.8 7.2-16 16-16zM512 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM288 477.1c0 19.3 15.6 34.9 34.9 34.9H541.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H381.1c-51.4 0-93.1 41.7-93.1 93.1z" /></svg>
// const doctor = <svg xmlns="http://www.w3.org/2000/svg" className='login_icon_svg' id='doctor_svg' height="4em" viewBox="0 0 576 512"><path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
// const Login = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [docEmail, setDocEmail] = useState("")
//     const [DocPassword, setDocPassword] = useState("")
//     const [eye, setEye] = useState(true);
//     const [view, setView] = useState(true)
//     const navigate= useNavigate()
//     const UserAuth = async (input: object) => {
//         var res = true
//         const check01 = () => {
//             Object.values(input).some(element => {
//                 if (element === "") {
//                     res = false
//                 }
//             });
//             return res
//         }

//         if (check01()) {

//             try {
//                 const task = await axios.post("http://localhost:3000/api/patient/authenticate", input)
//                 navigate("/homePage")
//             } catch (error) {
//                 console.error(error);

//             }
//         }
//     }
//     const DoctorAuth = async (input: object) => {
//         var res = true
//         const check01 = () => {
//             Object.values(input).some(element => {
//                 if (element === "") {
//                     res = false
//                 }
//             });
//             return res
//         }

//         if (check01()) {

//             try {
//                 const task = await axios.post("http://localhost:3000/api/doctor/authenticate", input)
//                 navigate("/homePage")

//             } catch (error) {
//                 console.error(error);

//             }
//         }
//     }

//     const TogglePass = () => {
//         const passwordInput = document.querySelector(".login_password_input") as HTMLInputElement;
//         if (passwordInput) {
//             if (passwordInput.type === "password") {
//                 passwordInput.type = "text";
//             } else {
//                 passwordInput.type = "password";
//             }
//         }
//     };
//     return (
//         <div className='Login_Body'>
//             <div className="container"
//             >
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 {view ? <div className="center">

//                     <div onClick={() => (setView(!view))}>{patient}</div>
//                     <h1>Patient Login</h1>
//                     <input className='login_input' style={{ borderColor: "#979FDA", borderWidth: "2px" }} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Type Your Email" />
//                     <input style={{ borderColor: "#979FDA", borderWidth: "2px" }} className='login_input login_password_input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type Your Password " />
//                     <div className='login_password_div' onClick={() => (TogglePass(), setEye(!eye))}>{
//                         eye ?
//                             eyeOpen : eyeClosed
//                     }

//                     </div>
//                     <div className='Submit' onClick={() => UserAuth({ email, password })}>Submit</div>
//                     <Link to="/SignUp"><p id='log' style={{color:'black'}}>..forgot Password?</p></Link>
//                 </div> : <div className="center">
//                     <div onClick={() => (setView(!view))}>{doctor}</div>
//                     <h1>Doctor Login</h1>
//                     <input style={{ borderColor: "#979FDA", borderWidth: "2px" }} className='login_input' onChange={(e) => setDocEmail(e.target.value)} type="email" placeholder="Type Your Email" />
//                     <input style={{ borderColor: "#979FDA", borderWidth: "2px" }} className='login_input login_password_input' onChange={(e) => setDocPassword(e.target.value)} type="password" placeholder="Type Your Password " />
//                     <div className='login_password_div' onClick={() => (TogglePass(), setEye(!eye))}>{
//                         eye ?
//                         eyeOpen : eyeClosed
//                     }
//                     </div>

//                     <div className='Submit' onClick={() => DoctorAuth({ email:docEmail, password:DocPassword })}>Submit</div>
//                         <Link to="/SignUp"><p id='log' style={{color:'black'}}>..forgot Password?</p></Link>
//                 </div>}
//             </div>
//         </div>
//     )
// }

// export default Login
