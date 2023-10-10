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
        <div className="container-first-div" >
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
            <button className="get-button" >Get Quote Now </button>
            <button className="learn-button" >Learn More </button>
          </div>
      </div>
      <div className="right">
        <div className="h1-book" >      
          <h1>Book Appointment</h1>
        </div>
          <div className="right-inputs">
          <label>Name * </label>
          <input type="text" placeholder="Name * " />
          <label> Email adress * </label>
          <input type="text"  placeholder="example@gmail.com" />
          <label>Departement * </label>
          <select name="department" id="">
          <option>hello</option>
          <option>hello</option>
          </select>
          <label>Time * </label>
          <input  type="time" placeholder="05:15 PM" />
          </div>
            <div className="button-right-first-div">
            <button>Book Appointment</button>
            </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Service;
