import React from "react";
import NavBar from "../navBar/NavBar";
import "./service.css";
import image from "../../assets/Rectangle 1548.png";
import MemberCard from "../membersCards/MemberCard";
import "../membersCards/style.css";
import userIcon from "../../assets/userIcon.png";
import Footer from "../footer/Footer"
import ServicesCard from "../servicesCards/ServicesCard";
import { useLocation } from "react-router-dom";
type props ={
  setIsLoggedIn:(value: boolean) => void;
};
const Service:React.FC<props> = ({setIsLoggedIn}) => {
  const location = useLocation()
  const fullstar = (
    <i className="fa-solid fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const nostar = (
    <i className="fa-regular fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const halfstar = (
    <i
      className="fa-regular fa-star-half-stroke fa-sm"
      style={{ color: "#F3CD03" }}
    ></i>
  );
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
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
        
        {/* find a doctor div */}
        
        <div className="find-a-doctor">
          <h1>Find A Doctor</h1>

          <div className="form-service-find">
            <input
              className="input-find-doctor"
              type="text"
              placeholder="Name"
            />
            <input
              className="input-find-doctor"
              type="text"
              placeholder="Speciality"
            />
            <div className="available-switch">
              <label className="available-find">Available</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="Search-button-find">Search</button>
          </div>
        </div>

        {/* services we provide  */}

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1>Services we provide</h1>
          </div>
          <div className="lorem-text">
            <p style={{fontSize:"16px",color:"black"}}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper{" "}
              <br />
              dalar elementur tempus hac tellus libero accumsan
            </p>
          </div>
        </div>

        {/* doctor card container  */}

        <div className="doctor-card-container-service">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />

          {/* <MemberCard /> */}
        </div>

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1>what our customers say</h1>
          </div>
          <div className="lorem-text">
            <p style={{ fontSize: "18px" , color:"black" }}>
              Problems trying to resolve the conflict between the two major
              realms of <br /> Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="review-container-service">
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
            </div>

            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {fullstar}
              {nostar}
              {nostar}
            </div>
            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {halfstar}
              {nostar}
              {nostar}
            </div>
            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
        </div>

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1 style={{ color: "black" }}>FAQ</h1>
          </div>
          <div className="lorem-text">
            <p style={{ fontSize: "16px" ,color:"black" }}>
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="faq-container-service">
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>

        </div>

          <div className="subscribe-to">
              <p className="p-suscribe-service">Subscribe to our newsletter</p>
          <div className="search-button">
            <input type="text" placeholder="Enter your email"/>
            <button className="suscribe-button-service">suscribe</button>
          </div>

          </div>
      </div>

<Footer/>

    </>
  );
};

export default Service;
