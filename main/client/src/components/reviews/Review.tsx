import React,{useEffect, useState} from 'react'
import avatar from "../../assets/profildoctor/avatar.png";
import AllReview from "../allreview/AllReview";
import { useNavigate } from 'react-router-dom';
import './review.css'
import { AppDispatch, RootState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../redux/doctorSlice';
interface Doctor {
  name: string;
  lastName: string;
  Address: string;
  email: string;
  password: string;
  MedicalInfo: "Neurosurgeons" | "Thoracic Surgeons" | "Orthopedic Surgeons" | "Plastic Surgeons" | "Oral and Maxillofacial Surgeons" | "Family Physicians" | "Internists" | "Emergency Physicians" | "Psychiatrists" | "Obstetricians" | "Dentists";
  rating: number | null;
  avatar: string;
  bio: string;
}
const Review = () => {
  const dispatch: AppDispatch = useDispatch();
  const doctors = useSelector((state: RootState) => state.doctor.data);
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  
  const navigate = useNavigate();
  const [clicked1, setClicked1] = useState(false)
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const fullstar = (
    <i className="fa-solid fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const nostar = (
    <i className="fa-regular fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );

  const chageState1 = () => {
    setClicked1(!clicked1);
  };

  const changeState2 = () => {
    setClicked2(!clicked2);
  };

  const changeState3 = () => {
    setClicked3(!clicked3);
  };

  const changeState4 = () => {
    setClicked4(!clicked4);
  };
  const changeState5 = () => {
    setClicked5(!clicked5);
  };
  return (
    <div className='reviews_container'>
         <div className="card_container">
          <p className="myProfile">My Profile</p>
         
         
          {doctors.map((doctor: Doctor)=>{return (

<div className="details_card"><img src={avatar} alt="Image" />

            <span className="name_doctor_info">{doctor.name}</span>
            <span className="medical_info_name">{doctor.MedicalInfo}</span>
            <button className="button-profile">
              <span className="edit_p">
                <svg
                  className="pen_edite_profil"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg>{" "}
                Edite Profile
              </span>
            </button>

            <span className="rate_profile_info">{doctor.rating}</span>
            <span className="rate_profile_info">Rates</span>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <div onClick={chageState1}>{clicked1 ? fullstar : nostar}</div>
              <div onClick={changeState2}>{clicked2 ? fullstar : nostar}</div>
              <div onClick={changeState3}>{clicked3 ? fullstar : nostar}</div>
              <div onClick={changeState4}>{clicked4 ? fullstar : nostar}</div>
              <div onClick={changeState5}>{clicked5 ? fullstar : nostar}</div>
            </div></div>

)})}
          
          
       
        </div>
        <div className="comments_container">
          <div className="topnav_profil_doctor">
            <span className="navprofil_doctor" onClick={()=>navigate('Myprofile')}>My Profile</span>
            <span className="navprofil_doctor">Change Password</span>
            <span className="navprofil_doctor">Notification</span>
            <span className="navprofil_doctor" onClick={()=>navigate('OneReview')}>Reviews</span>
          </div>
          <AllReview />
        </div> 
    </div>
  )
}

export default Review