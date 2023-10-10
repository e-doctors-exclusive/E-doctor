import React from 'react';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';
import DoctorAccount from './components/doctorAccount/DoctorAccount';
import HomePage from './components/homePage/HomePage';
import Service from './components/service/Service';
import Navbar from './components/navBar/NavBar'
import SignUp from './components/userAuth/SignUp';
// import Footer from './components/footer/Footer';
function App() {
  return (
    <>  
      {/* <Navbar/> */}
      <Routes>  
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/useraccount" element={<UserAccount/>}/>    
      <Route path="/contactus" element={<ContactUs/>}/>    
      <Route path="/doctor" element={<DoctorAccount/>}/>  
      <Route path="/doctorSign" element={<SignUp/>} />
      <Route path="/homePage" element={<HomePage/>}/>   
      <Route path="/service" element={<Service/>}/>   

      </Routes>
      {/* <Footer/> */}
      </>

  );
}

export default App;
