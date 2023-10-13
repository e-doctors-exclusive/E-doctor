import React, { useState } from 'react'
import './doctorProfile.css'
import iconbell from '../../assets/profildoctor/iconbell.png'
import help from '../../assets/profildoctor/help.png'
import logo from '../../assets/profildoctor/logo.png'
const DoctorProfile = () => {
  const [selected1,setSelected1]=useState(false)
  const [selected2,setSelected2]=useState(false)
  const [selected3,setSelected3]=useState(false)
  const [selected4,setSelected4]=useState(false)
  const [selected5,setSelected5]=useState(false)
  const [selected6,setSelected6]=useState(false)
  const [selected7,setSelected7]=useState(false)
  const [selected8,setSelected8]=useState(false)
  
  const handleSelecte1 =() => {
    setSelected1(!selected1)
  }

  const handleSelecte2 =() => {
    setSelected2(!selected2)
  }
  const handleSelecte3 =() => {
    setSelected3(!selected3)
  }
  const handleSelecte4 =() => {
    setSelected4(!selected4)
  }
  const handleSelecte5 =() => {
    setSelected5(!selected5)
  }
  const handleSelecte6 =() => {
    setSelected6(!selected6)
  }
  const handleSelecte7 =() => {
    setSelected7(!selected7)
  }
  const handleSelecte8 =() => {
    setSelected8(!selected8)
  }
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
                   <h6 className='unicode'>&#9660;</h6>
                  </div>
                  <span className=' MedicalInfo_doctor'>Cardiologist</span>
                  </div>
                </div>
                </div>
     </div>
     {/* menu bar */}
          <div className='content_doctor_profil'>
            <div className='menu_left_doctor'>
          <ul className='list_profil_doctor'>
            <div className='icon_list' onClick={handleSelecte1}>
            {/* {selected1  ? style={{ backgroundColor: 'black'}}: style={{ backgroundColor: 'white' }}} */}
            <i className="fa-brands fa-microsoft" />
            <span className='text_sid'>Overview</span>
            </div>
            <div className='icon_list'  onClick={handleSelecte2}>
            <i className="fa-regular fa-calendar"></i>
         
            <span className='text_sid'>Appointment</span>
            </div>
            <div className='icon_list'  onClick={handleSelecte3}>
            <i className="fa-solid fa-user-plus"></i>
            <span className='text_sid'>My Patients</span>
            </div>
            <div className='icon_list'  onClick={handleSelecte4}>
            <i className="fa-sharp fa-solid fa-clock"></i>
            <span className='text_sid'>Schedule Timings</span>

            </div>
            <div className='icon_list'  onClick={handleSelecte5}>
            <i className="far fa-credit-card"></i>
            <span className='text_sid'>Payments</span>
            </div>
            <div className='icon_list'  onClick={handleSelecte6}>
            <i className="fa-regular fa-envelope"></i>
            <span className='text_sid'>Messages</span>

            </div>
            <div className='icon_list'  onClick={handleSelecte7}>
            <i className="fa-solid fa-sheet-plastic"></i>
            <span className='text_sid'>Blog</span>

            </div>
            <div className='icon_list'  onClick={handleSelecte8}>
            <i className="fa-solid fa-gear"></i>
            <span className='text_sid'>Settings</span>

            </div>
          </ul>
            </div>
          </div>
        </div>
  )
}
export default DoctorProfile