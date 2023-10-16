import React from "react";
import "./profildoctor.css";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";



=======
import DoctorProfile from "../doctorprofile/DoctorProfile";
import avatar from "../../assets/profildoctor/avatar.png";
import Review from "../reviewProfileDoctor/Review";
import { MDBBtn } from "mdbreact";
>>>>>>> aaac2fb7b608dc331bbf96e38665216861cd8d54
const ProfilDoctor = () => {

  return (
    <div className="profilDoctor">
      <div className="profile_Doctor_right">
        <Outlet/>
      </div>
    </div>
  );
};

export default ProfilDoctor;
