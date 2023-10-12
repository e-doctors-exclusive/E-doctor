import React from "react";
import NavBar from "../navBar/NavBar";
import pictureContactUs from "../../assets/Rectangle 1548.png";
import "./contact.css";
import Footer from "../footer/Footer";
const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="picture-container-contactus">
        <img src={pictureContactUs} />
      </div>
      <div className="get-in-us-contactus">
        <p
          style={{ fontSize: "16px", fontFamily: "sans-serif", opacity: "0.7" }}
        >
          Get in Touch
        </p>
        <h1 style={{ fontSize: "42px" }}>Contact Us</h1>
        <p
          style={{ fontSize: "16px", fontFamily: "sans-serif", opacity: "0.7" }}
        >
          Lorem ipsum dolor sit amat, consecteur adipiscing elit .
        </p>
      </div>

      <div className="form-container-contact-us">
        <div className="input-cooo">
          <div className="firs-last-name-contact">
          <div className="one-input">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first Name" style={{width:"31rem"}}  className="all-input-contactus" />
          </div>
          <div className="one-input">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last Name" style={{width:"31rem"}}  className="all-input-contactus" />
          </div>
        </div>

        <div className="email-phone-number-contact">
          <div className="one-input">
            <label>E-mail</label>
            <input type="text" placeholder="Enter your Email" style={{width:"31rem"}}   className="all-input-contactus"/>
          </div>
          <div className="one-input">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter you phone Number" style={{width:"31rem"}}  className="all-input-contactus" />
          </div>
        </div>

        <div className="choose-contact">
          <div className="one-input">
          <label>Choose a topic</label>
         
          <select name="" id="" style={{width:"68rem"}}  className="all-input-contactus" >
            <option value="">choukou</option>
          </select>
          </div>
        </div>


        <div className="message-contact">
            <div className="one-input">
            <label>Message</label>
            <textarea  placeholder="Type your message" style={{width:"66rem" ,height:"15rem",fontSize:"20px"}}  className="all-input-contactus" ></textarea>{" "}
          </div>
        </div>


        {/* <div className="one-checkbox">
          <input type="checkbox"  className="one-checkbox" />
          <label>I accept the terms</label>
        </div> */}
        <div className="button-contact one-input">
          <button className="submit-button-contact">Submit</button>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
