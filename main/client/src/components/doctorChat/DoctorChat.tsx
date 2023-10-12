import React from 'react'
import './style.css'
import calendar from '../../assets/calendar-samsung-16-svgrepo-com.svg'
import money from '../../assets/money-check-edit.svg'
import envelope from '../../assets/envelope-open-text.svg'
import clock from '../../assets/clock-nine.svg'
import file from '../../assets/file-invoice.svg'
import wheel from '../../assets/adiutor-svgrepo-com.svg'
import person from '../../assets/bouncer-svgrepo-com.svg'
import overview from '../../assets/forerkort-svgrepo-com.svg'
import logo from '../../assets/pie-chart-svgrepo-com.svg'
import scouter from '../../assets/basic-ui-computer-11-svgrepo-com.svg'
import profilePic from '../../assets/Doctor_9.png'

const DoctorChat = () => {
  return (
    <div className='biggest_div_ever'>
    <div className='sidebar_overview'>

        <div className='logo_doct'>
            <img className='logo_chat' src={logo} alt="" />
            <h1 className='logo_title'>Doct.</h1>
        </div>
        <div className='wrapper_chat'>
        <div className='side-bar_doctor_chat'> 
        <div className='sidebar_doctor_chat'>
            <img className='icons_doctor_chat' src={overview} alt="" />
            <p className='sidebar_paragraph'>Overview</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={calendar} alt="" />
            <p className='sidebar_paragraph'>Appointment</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={person} alt="" />
            <p className='sidebar_paragraph'>My Patients</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={clock} alt="" />
            <p className='sidebar_paragraph'>Schedule Timings</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={money} alt="" />
            <p className='sidebar_paragraph'>Payments</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={envelope} alt="" />
            <p className='sidebar_paragraph'>Message</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={file} alt="" />
            <p className='sidebar_paragraph'>Blog</p>
        </div>
        <div className='sidebar_doctor_chat'>
        <img className='icons_doctor_chat' src={wheel} alt="" />
            <p className='sidebar_paragraph'>Settings</p>
        </div>
        </div>
        </div>
    </div>
    <div className='rooms_chat'>
        <div className='doctor_chat_container'>
        <h1 className='doctor_chat_title'>Message</h1>
        <div className='search_input_chat'>
        <img className='icons_doctor_chat' src={scouter} alt="" />
        <input className='chat_search_input' type="text" placeholder='Search for message' />
        </div>
        <div className='rooms_wrapper_chat'>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>  
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>  
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>
            </div> 
          <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div> 
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>   
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div> 
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>  
        </div>
        <div className='chatroom_doctor'>
          <img className='doctor_profile_icon' src={profilePic} alt="" />
          <div className='text_container_chat'>
          <p className='doctor_chat_name'>Jone Martin</p>  
          <p className='doctor_chat_message'>
            I hope you get well soon
            </p> 
            </div>  
        </div>
        </div>
        </div>
        </div>
        <div className='conversation_doctor'>
          <div className='conversation_title_status'>
            <img className='profile_picture_doctor_conversation' src={profilePic} alt="" />
            <div className='profile_details_conversation'>
            <p className='doctor_name_conversation'>Jone Martin</p>
            <p className='doctor_status_conversation'>Onlines</p>
            </div>
            <img className='doctor_favorite_conversation' src="" alt="" />
            <img className='doctor_report_conversation' src="" alt="" />
          </div>
        </div>
    </div>
  )
}

export default DoctorChat