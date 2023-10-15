import React from 'react'
import './myprofil.css'
const MyProfil = () => {
  return (
    <div>
      <div className="card_profile_doc">
   <div className="personal">
      <div className="avatar">
         <img src="https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/pixel%20avatar.png" alt="user avatar" />
      </div>
      <div className="nameHolder">
         <h1>Mike Vazovsky</h1>
         <h2>Frontend developer</h2>
      </div>
   </div>
   <div className="info">
      <span>Pens: 14</span>
      <span>Posts: 7</span>
      <span>Projects: 5</span>
   </div>
   <div className="skills">
      <span>CSS3</span>
      <span>HTML5</span>
      <span>JavaScript</span>
      <span>PHP</span>
   </div>
   <div className="followers">
      <div>
         <h1>followers</h1>
         <h2>45</h2>
      </div>
      <div>
         <h1>following</h1>
         <h2>12</h2>
      </div>
   </div>
   <a className="randomizeButton">Randomize</a>
</div>
    </div>
  )
}

export default MyProfil