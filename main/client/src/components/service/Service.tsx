import React from "react";
import NavBar from "../navBar/NavBar";
import "./service.css";
import image from "../../assets/Rectangle 1548.png";
const Service = () => {
  return (
    <>
      <NavBar />
      <div className="fisrt-div">
        <img src={image} />
        <div className="container-first-div">
          <div className="left">
            <div className="meet-text">
              <p>Meet the Best Hospital</p>
            </div>
            <div className="weKnow-text">
              <p>
                We Know how large objects will act, but things on a small scale
              </p>
            </div>
            <div className="button-first-div-service">
              <button className="get-button">Get Quote Now </button>
              <button className="learn-button">Learn More </button>
            </div>
          </div>
          <div className="right">
            <div className="h1-book">
              <h1>Book Appointment</h1>
            </div>
            <div className="right-inputs">
              <label>Name * </label>
              <input type="text" placeholder="Name * " />
              <label> Email adress * </label>
              <input type="text" placeholder="example@gmail.com" />
              <label>Departement * </label>
              <select name="department" id="">
                <option>Department</option>
                <option>hello</option>
                <option>hello</option>
              </select>
              <label>Time * </label>
              <input type="time" value="04:00" />
            </div>
            <div className="button-right-first-div">
              <button className="book-appointment-button">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="big-container-after-pict">
        <div className="find-a-doctor">
          <div className="h1-find-doctor">
          <h1>Find A Doctor</h1>
          </div>
        <div className="form-service-find">
          <input className="input-find-doctor" type="text" placeholder="Name" />
          <input className="input-find-doctor" type="text" placeholder="Speciality"/>
        <div className="available-switch">
          <label  className="available-find">Available</label>
          <label className="switch">
          <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
          </div>
              <button className="Search-button-find">Search</button>

        </div>


        </div>
      </div>
    </>
  );
};

export default Service;
