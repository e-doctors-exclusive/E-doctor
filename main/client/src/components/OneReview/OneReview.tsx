import React, { useEffect, useState } from "react";
import "./oneReview.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { fetchDoctors } from "../../redux/doctorSlice";
interface objtype{
  content:string,
  rating:string,
  HelpCount:number,
  DocReply:string,
  createdAt:Date
}
interface Doctor {
  name: string;
  lastName: string;
  Address: string;
  email: string;
  password: string;
  MedicalInfo: "Neurosurgeons" | "Thoracic Surgeons" | "Orthopedic Surgeons" | "Plastic Surgeons" | "Oral and Maxillofacial Surgeons" | "Family Physicians" | "Internists" | "Emergency Physicians" | "Psychiatrists" | "Obstetricians" | "Dentists";
  rating: number | null;
  avatar: string;
  bio: string;
}

const OneReview = (props:{review:objtype}) => {
  const dispatch: AppDispatch = useDispatch();
const doctors = useSelector((state: RootState) => state.doctor.data);
useEffect(() => {
  dispatch(fetchDoctors());
}, [dispatch]);


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

// const update =() => {
//   dispatch(UpdateDoctor(doctors.rating))
// }
  
  
  
  
  
  

  return (
    <div className="all_review_content">
      <div className="blog_review">
        <div className="image_name_profession_rate">
          <div className="image_name_profession">{doctors.map((doctor: Doctor)=>{return (<div>
            <img className="image_review" src={doctor.avatar} />
            <div className="name_prof ">
              <span className="name_review">{doctor.name}</span>
              <span className="profession_review">{doctor.MedicalInfo}</span></div>
              </div>)})}
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
