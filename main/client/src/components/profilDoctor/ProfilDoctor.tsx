import React from "react";
import "./profildoctor.css";
import { Outlet } from "react-router-dom";



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
