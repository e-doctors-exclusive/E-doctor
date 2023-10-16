import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';
import DoctorAccount from './components/doctorAccount/DoctorAccount';
import HomePage from './components/homePage/HomePage';
import MenuDocotor from './components/menudocotor/MenuDoctor'
import ServicesCard from './components/servicesCards/ServicesCard';
import { SignUp } from './components/Sign_Up/SignUp';
import ReviewCard from './components/reviewCards/ReviewCard'
import Service from './components/service/Service';
import Login from "./components/Login/Login";
import DoctorChat from './components/doctorChat/DoctorChat';
import { Navigate } from 'react-router-dom';
import NavMenuDoctor from './components/navMenuDoctor/NavMenuDoctor';
import Overview from './components/overviews/Overview';
import Review from './components/reviews/Review';
import EditeProfil from './components/editeProfil/EditeProfil';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/contactus" element={<ContactUs setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cards" element={<ServicesCard />} />
        <Route path="/review" element={<ReviewCard />} />
        <Route path="/doctor" element={<DoctorAccount />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/service" element={<Service setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/menuDoctor" element={<MenuDocotor />} >
          <Route path='overview' element={<Overview />} />
          <Route path="chat" element={<DoctorChat />} />
          <Route path='EditeProfil' element={<EditeProfil/>} />
          <Route path='NavMenuDoctor' element={<NavMenuDoctor/>} >
            <Route path='Review' element={<Review/>}/>
          
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
