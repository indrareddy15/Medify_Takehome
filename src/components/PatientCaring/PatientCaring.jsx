import React from "react";
import "./PatientCaring.css";

import BluetickLogo from "../../assets/bluetick.png";
import CaringLogo from "../../assets/caring.png";

const PatientCaring = () => {
  return (
    <div className="PatientCaring">
      <img src={CaringLogo} alt="Caring Logo" />
      <div>
        <h2>HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1>
          <span>Patient</span> <span>Caring</span>{" "}
        </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div>
          <img src={BluetickLogo} alt="Bluetick Logo" />
          <p>Stay Updated About Your Health</p>
        </div>
        <div>
          <img src={BluetickLogo} alt="Bluetick Logo" />
          <p>Check Your Results Online</p>
        </div>
        <div>
          <img src={BluetickLogo} alt="Bluetick Logo" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
