import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';

import HomePage from './components/homePage/HomePage';
import DoctorAccount from './components/doctorAccount/DoctorAccount'
import  {SignUp} from './components/doctorAuth/SignUp';

import Service from './components/service/Service';
import UserSign from './components/userAuth/UserSign';
import Calendar from './components/calendar/Calendar';
import DoctorProfile from './components/doctorProfile/DoctorProfile';
// import Navbar from './components/navBar/NavBar'
// import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>  
      {/* <Route path="/navbar" element={<Navbar/>}/> */}
      <Route path="/useraccount" element={<UserAccount/>}/>    
      <Route path="/contactus" element={<ContactUs/>}/> 
      <Route path="/doctorprofil" element={<DoctorProfile/>}/>  

      <Route path="/doctor" element={<DoctorAccount/>}/>  
      <Route path="/docAuth" element={<SignUp/>}/>   
      <Route path="/UserSign" element={<UserSign/>} />

      <Route path="/homePage" element={<HomePage/>}/>   
      <Route path="/service" element={<Service/>}/>   
      <Route path="/calander" element={<Calendar/>}/>   
      </Routes>
      {/* <Footer/> */}
    </>

  );
}

export default App;
