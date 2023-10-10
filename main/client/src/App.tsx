import React from 'react';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';
import DoctorAccount from './components/doctorAccount/DoctorAccount';
import HomePage from './components/homePage/HomePage';
function App() {
  return (
    <Routes>  
      <Route path="/useraccount" element={<UserAccount/>}/>    
      <Route path="/contactus" element={<ContactUs/>}/>    
      <Route path="/doctor" element={<DoctorAccount/>}/>    
      <Route path="/homePage" element={<HomePage/>}/>    
        
       
      </Routes>
    
  );
}

export default App;
