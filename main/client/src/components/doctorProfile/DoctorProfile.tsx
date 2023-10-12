import React, { useState } from 'react'
import './doctorProfile.css'
import iconbell from '../../assets/profildoctor/iconbell.png'
import help from '../../assets/profildoctor/help.png'
import logo from '../../assets/profildoctor/logo.png'
const DoctorProfile = () => {
  const [clicked,setClicked] = useState(false)
  const handleListClick = () => {
    setClicked(true);
  };
  return (
    
        <div className='container_doctor_profil'>
          <div className='navBar_doctor_profil'>
            <div className='left_doctor_profil'>
            <div className='logo_doctor_profil'>
              <img className='logo1' src={logo}/>
<div className='text_doctor_profil'>
  <span className='health_doctor_profil'>Health</span>
  <span className='car_doctor_profil'>care</span>
</div>
</div>


            <div className="search_doctor_Profil">
            <button className="search__button_doctor_Profil">
             <svg className="search__icon_doctor_Profil" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
    <input type="text" className="search__input_doctor_Profil" placeholder="Search Appointment,Patient or etc"/>
    
</div>
</div>

    <div className='right_nav_doctor'>
        <div className='icons_doctor_notify_bell'>
            <img className='bell_doctor' src={iconbell}/>
            <svg
                    className="red_point_doctor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle
                      cx="4.76756"
                      cy="4.89445"
                      r="4.09653"
                      fill="#FF0000"
                    />
                  </svg>
        </div>
        <img  className='help_doctor' src={help}/>
          <div className="icon-user_doctor">
                  <img
                    className="image-user_doctor"
                    src="https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png"
                  />
                  <div className='name_doctor'>
                    <div className='unicode_icon'>
                     
                  <span className="name-user-icon_doctor">Mohamed </span>
                   <h6>&#9660;</h6>
                  </div>
                  <span className=' MedicalInfo_doctor'>Cardiologist</span>
                  </div>
                </div>
                </div>
     </div>
          <div className='content_doctor_profil'>
            <div className='menu_left_doctor'>
          <ul className='list_profil_doctor'>
            <div className='icon_list' onClick={handleListClick} style={{ backgroundColor: clicked ? 'black' : 'white' }}>
            
            <i className="fa-solid fa-grid-2"></i><li>Overview</li>
            </div>
            <div className='icon_list'>
            <i className="fa-regular fa-calendar"></i>
            <li>Appointment</li>
            </div>
            <div className='icon_list'>
            <i className="fa-solid fa-user-plus"></i>
            <li>My Patients</li>
            </div>
            <div className='icon_list'>
            <i className="fa-sharp fa-solid fa-clock"></i>
            <li>Schedule Timings</li>
            </div>
            <div className='icon_list'>
            <i className="far fa-credit-card"></i>
            <li>Payments</li>
            </div>
            <div className='icon_list'>
            <i className="fa-regular fa-envelope"></i>
            <li>Messages</li>
            </div>
            <div className='icon_list'>
            <i className="fa-sharp fa-light fa-file-spreadsheet"></i>
            <li>Blog</li>
            </div>
            <div className='icon_list'>
            <i className="fa-solid fa-gear"></i>
            <li>Settings</li>
            </div>
          </ul>
            </div>
          </div>
        </div>
  )
}
export default DoctorProfile