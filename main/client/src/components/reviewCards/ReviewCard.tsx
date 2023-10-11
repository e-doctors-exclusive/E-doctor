import React from 'react'
import './style.css'
import woman1 from '../../assets/woman1.svg'
import woman2 from '../../assets/woman2.svg'
import woman3 from '../../assets/woman3.svg'


const ReviewCard = () => {
  return (
    <div className="box_review_card">
    <img className="image_container_review_card" alt="" src={woman3} />
    <h2 className="card-heading_review_card">“The best service”</h2>
    <p className="paragraph_review_card">
    Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.
    </p>
    <div className='signature_review_card'>
    <h2 className="description_review_card">Andy Smith</h2>
    <h3 className="work_review_card">CEO Dot Austere</h3>
    </div>
    </div>

  )
}

export default ReviewCard