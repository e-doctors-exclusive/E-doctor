import React, { useState, useEffect } from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMessages, addMessage } from '../../redux/messageSlice'
import scouter from '../../assets/basic-ui-computer-11-svgrepo-com.svg'
import profilePic from '../../assets/Doctor_9.png'
import heart from '../../assets/heart2-svgrepo-com.svg'
import warning from '../../assets/warning-svgrepo-com.svg'
import send from '../../assets/send-1-svgrepo-com.svg'
import attach from '../../assets/attach-svgrepo-com.svg'
import io from 'socket.io-client'
import { AppDispatch, RootState } from '../../redux'

const socket = io("http://localhost:3000")

const DoctorChat = () => {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const messageset = useSelector((state: RootState) => state.message.data);
  const [messages, setMessages] = useState<string[]>(([]));
  const dispatch: AppDispatch = useDispatch();
  const [newMessage, setNewMessage] = useState<string>('');


  console.log(messageset)



  const sendMessage = () => {
    socket.emit('message', {
      MessageContent: newMessage
    })
    dispatch(addMessage({ MessageContent: newMessage }))
    setNewMessage('');
  };


  useEffect(() => {
    dispatch(fetchMessages())
    socket.on("messageResponse", (data) => {
      console.log("this is data ", data);
      setMessages([...messages,data])
    })
    
  }, [socket, dispatch,messages])






  console.log(messages, 'those are msgs')


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
          <div className='messages_container_chat' >
            {(Array.isArray(messageset)?messageset:[messageset,...messages]).map((message: any, i) => (
              <>
                {console.log("this is msgggggg", message)
                }
                <div className='left_message_doctor'>
                  <div className='little_message_container'>
                    <img className='doctor_picture_history_chat' src={profilePic} alt="" />
                    <div className='message_container_chat'>
                      <p className='first_left_Message'>{message.MessageContent}</p>
                    </div>
                    <span className='date_message_chat'>10:12 AM, Today</span>
                  </div>
                </div></>
            ))}


            {/* <div className='right_message_doctor'>
              <div className='little_message_container2'>
                <img className='doctor_picture_history_chat2' src={profilePic} alt="" />
                <div className='message_container_chat2'>
                  <p className='first_right_Message'>Hi Doctor,</p>
                </div>
                <span className='date_message_chat2'>10:12 AM, Today</span>
              </div>
            </div> */}
          </div>

        </div>
        <div className='input_elements'>
          <input className='message_input_chat' value={newMessage} type="text" onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(event) => {
            if (event.keyCode == 13) sendMessage()
          }} />
          <img className='sending_icons' src={attach} alt="" />
          <img className='sending_icons' src={send} alt="" onClick={sendMessage} />
        </div>

      </div>

    </div>
  )
}

export default DoctorChat