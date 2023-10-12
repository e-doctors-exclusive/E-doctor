import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';
import DoctorAccount from './components/doctorAccount/DoctorAccount';
import HomePage from './components/homePage/HomePage';
import ServicesCard from './components/servicesCards/ServicesCard';
import MemberCard from './components/membersCards/MemberCard';
import  {SignUp} from './components/Sign_Up/SignUp';
import ReviewCard from './components/reviewCards/ReviewCard'
import Service from './components/service/Service';
import Login from "./components/Login/Login";
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
      <Route path="/cards" element={<ServicesCard/>}/>  
      <Route path="/members" element={<MemberCard/>}/> 
      <Route path="/review" element={<ReviewCard/>}/>
      <Route path="/doctor" element={<DoctorAccount/>}/>  
      <Route path="/signUp" element={<SignUp/>}/>   
      <Route path="/login" element={<Login/>}/>   
      <Route path="/homePage" element={<HomePage/>}/>   
      <Route path="/service" element={<Service/>}/>
      <Route path="/doctorprofil" element={<DoctorProfile/>}/>
         
      {/* <Route path="/calander" element={<Calendar/>}/>    */}
      </Routes>
    </>

  );
}

export default App;
