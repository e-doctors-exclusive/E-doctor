import React, { useState } from "react";
import avatar from "../../assets/profildoctor/avatar.png";
import "./oneReview.css";
interface objtype{
  content:string,
  rating:string,
  HelpCount:number,
  DocReply:string,
  createdAt:Date
}

const OneReview = (props:{review:objtype}) => {

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const fullstar = (
    <i className="fa-solid fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const nostar = (
    <i className="fa-regular fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );

  const chageState1 = () => {
    setClicked1(!clicked1);
  };

  const changeState2 = () => {
    setClicked2(!clicked2);
  };

  const changeState3 = () => {
    setClicked3(!clicked3);
  };

  const changeState4 = () => {
    setClicked4(!clicked4);
  };
  const changeState5 = () => {
    setClicked5(!clicked5);
  };
const update =() => {
  try {
    
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div className="all_review_content">
      <div className="blog_review">
        <div className="image_name_profession_rate">
          <div className="image_name_profession">
            <img className="image_review" src={avatar} />
            <div className="name_prof">
              <span className="name_review">Ronald Richards</span>
              <span className="profession_review">Engineer</span>
            </div>
          </div>
          <div className="rate_date">
            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <div onClick={chageState1}>{clicked1 ? fullstar : nostar}</div>
              <div onClick={changeState2}>{clicked2 ? fullstar : nostar}</div>
              <div onClick={changeState3}>{clicked3 ? fullstar : nostar}</div>
              <div onClick={changeState4}>{clicked4 ? fullstar : nostar}</div>
              <div onClick={changeState5}>{clicked5 ? fullstar : nostar}</div>
            </div>
            <span className="date_review">{new Date(props.review.createdAt).toDateString()}</span>
          </div>
        </div>
        <div className="content_review_text">
          <p className="content_review">
           {props.review.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneReview;
