import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UserAccount from './components/userAccount/UserAccount'
import ContactUs from './components/contactUs/ContactUs';
import DoctorAccount from './components/doctorAccount/doctorAccount';
import HomePage from './components/homePage/HomePage';
import DoctorProfile from './components/doctorProfile/DoctorProfile';
import ServicesCard from './components/servicesCards/ServicesCard';
import { SignUp } from './components/Sign_Up/SignUp';
import ReviewCard from './components/reviewCards/ReviewCard'
import Service from './components/service/Service';
import Login from "./components/Login/Login";
import DoctorChat from './components/doctorChat/DoctorChat';
import { Navigate } from 'react-router-dom';
import Overview from './components/overviews/Overview';
import Review from './components/myreviews/Review';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>

      <Routes>
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/contactus" element={<ContactUs setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cards" element={<ServicesCard />} />
        <Route path="/review" element={<ReviewCard />} />
        <Route path="/chat" element={<DoctorChat />} />

        <Route path="/doctor" element={<DoctorAccount />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/service" element={<Service setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} >
          <Route path='overview' element={<Overview />} />
          <Route path='Review' element={<Review />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
