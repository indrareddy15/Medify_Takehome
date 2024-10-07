import React from "react";
import "./Specialisation.css";
// import cardiology from "../asset/cardiology.png";
// import lab from "../asset/lab.png";
// import mri from "../asset/mri.png";
// import primary from "../asset/primary.png";
// import psycologist from "../asset/psycologist.png";
// import test from "../asset/test.png";
// import xray from "../asset/xray.png";
import CardiologyLogo from "../../assets/cardiology.png";
import MedicalLab from "../../assets/lab.png";
import MRILogo from "../../assets/mri.png";
import PrimaryHealthCareLogo from "../../assets/primary.png";
import PsycologistLogo from "../../assets/psycologist.png";
import TestReprotsLogo from "../../assets/test.png";
import XRayLogo from "../../assets/xray.png";

const Specialisation = () => {
  return (
    <div className="Specialisation">
      <h1>Find by specialisation</h1>
      <div className="box-container">
        <div className="box">
          <img src={MedicalLab} alt="Medical Lab" />
          <h3>Dentistry</h3>
        </div>
        <div className="box">
          <img src={PrimaryHealthCareLogo} alt="Primary Health Care Logo" />
          <h3>Primary Care</h3>
        </div>
        <div className="box">
          <img src={CardiologyLogo} alt="Cardiology Logo" />
          <h3>Cardiology</h3>
        </div>
        <div className="box">
          <img src={MRILogo} alt="MRI Logo" />
          <h3>MRI</h3>
        </div>
        <div className="box">
          <img src={TestReprotsLogo} alt="Test Reprots Logo" />
          <h3>Blood Test</h3>
        </div>
        <div className="box">
          <img src={PsycologistLogo} alt="Psycologist Logo" />
          <h3>psycologist</h3>
        </div>
        <div className="box">
          <img src={MedicalLab} alt="Medical Lab" />
          <h3>Laboratory</h3>
        </div>
        <div className="box">
          <img src={XRayLogo} alt=" XRayLogo" />
          <h3>X-Ray</h3>
        </div>
      </div>
      <button>View All</button>
    </div>
  );
};

export default Specialisation;
