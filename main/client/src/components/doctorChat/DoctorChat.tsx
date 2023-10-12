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
import heart from '../../assets/heart2-svgrepo-com.svg'
import warning from '../../assets/warning-svgrepo-com.svg'
import send from '../../assets/send-1-svgrepo-com.svg'
import attach from '../../assets/attach-svgrepo-com.svg'

const DoctorChat = () => {
  return (
    <div className='biggest_div_ever'>
    <div className='rooms_chat'>
        <div className='doctor_chat_container'>
        <h1 className='doctor_chat_title'>Messages</h1>
        <div className='search_input_chat'>
        <img className='icons_doctor_chat' src={scouter} alt="" />
        <input className='chat_search_input' type="text" placeholder='Search for a message' />
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
            <div className='left_top_bar_chat'>
            <img className='profile_picture_doctor_conversation' src={profilePic} alt="" />
            <div className='profile_details_conversation'>
            <p className='doctor_name_conversation'>Jone Martin</p>
            <p className='doctor_status_conversation'>Online</p>
            </div>
            </div>


            <div className='icons_top_convesation'>
            <img className='doctor_icons_conversation' src={heart} alt="" />
            <img className='doctor_icons_conversation' src={warning} alt="" />
            </div>

          </div>


          <div className='doctor_chat_history'>
            <div className='messages_container_chat'>
            <div className='left_message_doctor'>
              <div className='little_message_container'>
              <img className='doctor_picture_history_chat' src={profilePic} alt="" />
              <div className='message_container_chat'>
                <p className='first_left_Message'>Hi Doctor,</p>
              </div>
              <span className='date_message_chat'>10:12 AM, Today</span>
              </div> 
            </div>

            <div className='right_message_doctor'>
              <div className='little_message_container2'>
              <img className='doctor_picture_history_chat2' src={profilePic} alt="" />
              <div className='message_container_chat2'>
                <p className='first_right_Message'>Hi Doctor,</p>
              </div>
              <span className='date_message_chat2'>10:12 AM, Today</span>
              </div> 
            </div>
            </div>
              
          </div>
          <div className='input_elements'>
            <input className='message_input_chat' type="text" />
            <img className='sending_icons' src={attach} alt="" />
            <img className='sending_icons' src={send} alt="" />
            </div>

        </div>
        
    </div>
  )
}

export default DoctorChat