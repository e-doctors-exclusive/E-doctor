import React from 'react'

import './review.css'
import { Outlet } from 'react-router-dom'


const Review = () => {
  return( <div className='reviews_container'>
    <Outlet/>
    
  </div>)
}

export default Review