import React from 'react'
import './style.css'
import AndySmith from '../../assets/AndySmith.svg'
import MattCannon from '../../assets/MattCannon.svg'
import JohnCarter from '../../assets/JohnCarter.svg'
import facebook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'
import linkedin from '../../assets/LinkedIn.svg'
enum MedicalInfotype{
  "Neurosurgeons",
  "Thoracic Surgeons",
  "Orthopedic Surgeons",
  "Plastic Surgeons,",
  "Oral and Maxillofacial Surgeons",
  "Family Physicians",
  "Internists",
  "Emergency Physicians",
  "Psychiatrists",
  "Obstetricians",
  "Dentists",
}
interface objtype{
  name:string
  lastName:string
  Address:string
  email:string
  password:string
  MedicalInfo:MedicalInfotype
  rating:string
  avatar:string
  bio:string

}
interface props{
  data:objtype
}
const MemberCard = (props:props) => {

  console.log("taswirti",props.data.avatar);
  
  return (
    <div className="box_Member_Card">
    <img className="image_container_Member_Card" alt="" src={props.data.avatar} />
      <h1 className="card-heading_Member_Card">{props.data.name}</h1>
      <h2 className="description_Member_Card">{props.data.MedicalInfo}</h2>
      <p className="paragraph_Member_Card">
       {props.data.bio}
      </p>
      
      <div className='social-media-icons_Member_Cards'>
        <img className ='facebook_Member_Card' src={facebook} alt="" />
        <img className ='twitter_Member_Card' src={twitter} alt="" />
        <img className ='instagram_Member_Card' src={instagram} alt="" />
        <img className ='linkedIn_Member_Card' src={linkedin} alt="" />
      </div>

  </div>
  )
}

export default MemberCard