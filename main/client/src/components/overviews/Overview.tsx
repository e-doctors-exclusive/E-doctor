import React from 'react'
import './overviews.css'
import camera from '../../assets/videocamera-record-svgrepo-com.svg'
import calendar from '../../assets/calendar-white.svg'
import building from '../../assets/building-icon-svgrepo-com.svg'
import person from '../../assets/person-line-drawing-svgrepo-com.svg'

const Overview = () => {
  return (
    <div className='big_wrapper_overview'>
        <div className='hello_greeting_overview'>
            <h1 className='hello_doctor_phrase'>Welcome, Dr. Stephen</h1>
            <span className='wishing_phrase_overview'>Have a nice day at great work</span>
        </div>
        <div className='statistics_cards_overview'>
        <div className='first_statistics'>
          <img className='statistics_icons' src={calendar} alt="" />
          <div className='statistics_information'>
            <p className='statistics_numbers'>24.4k</p>
            <span className='statistics_details'>Appointments</span>
          </div>
        </div>
        <div className='second_statistics'>
        <img className='statistics_icons' src={person} alt="" />
          <div className='statistics_information'>
            <p className='statistics_numbers'>24.4k</p>
            <span className='statistics_details'>Appointments</span>
          </div>
        </div>
        <div className='third_statistics'>
        <img className='statistics_icons' src={building} alt="" />
          <div className='statistics_information'>
            <p className='statistics_numbers'>24.4k</p>
            <span className='statistics_details'>Appointments</span>
          </div>
        </div>
        <div className='fourth_statistics'>
        <img className='statistics_icons' src={camera} alt="" />
          <div className='statistics_information'>
            <p className='statistics_numbers'>24.4k</p>
            <span className='statistics_details'>Appointments</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Overview