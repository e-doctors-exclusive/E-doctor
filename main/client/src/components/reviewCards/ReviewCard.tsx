import React from 'react'
import './style.css'
import woman1 from '../../assets/woman1.svg'
import woman2 from '../../assets/woman2.svg'
import woman3 from '../../assets/woman3.svg'


const ReviewCard = () => {
  return (
    <div className='allreviews_review_card'>
        <div className="box_review_card">
    <img className="image_container_review_card" alt="" src={woman1} />
    <h2 className="card-heading_review_card">“An amazing service”</h2>
    <p className="paragraph_review_card">
      Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est
      velitolm.
    </p>
    <div className='signature_review_card'>
    <h2 className="description_review_card">John Carter</h2>
    <h3 className="work_review_card">CEO at Google</h3>
    </div>
    </div>
    <div className="box_review_card">
    <img className="image_container_review_card" alt="" src={woman2} />
    <h2 className="card-heading_review_card">“One of a kind service”</h2>
    <p className="paragraph_review_card">
    Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.
    </p>
    <div className='signature_review_card'>
    <h2 className="description_review_card">Sophie Moore</h2>
    <h3 className="work_review_card">MD at Facebook</h3>
    </div>
    </div>
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
</div>
  )
}

export default ReviewCard