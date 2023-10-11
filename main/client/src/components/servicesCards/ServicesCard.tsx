import React from 'react'
import './servicesCard.css'
import teeth from '../../assets/teeth.png'
import diagno from '../../assets/diagno.png'
import bones from '../../assets/maksour.png'
import arrow from '../../assets/Arrow Right.svg'

const ServicesCard = () => {
  return (
    <div className='allCards_service_card'>
  

  <div className="box_service_card">
    <img className="image_container_service_card" alt="" src={diagno} />
      <h1 className="card-heading_service_card">Diagnosis</h1>
  
      <p className="paragraph_service_card">
        Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
      </p>
        <div className="label3_service_card">
      <h1 className="label3_service_card">Learn more </h1>
      <img className="arrow-right" alt="Arrow right" src={arrow} />
      </div>
  </div>

  </div>
  )
}

export default ServicesCard