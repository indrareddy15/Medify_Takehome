import React, { useState } from "react";
import "./MyBookings.css";

import SearchLogo from "../../assets/searchgrey.png";
import SearchWhite from "../../assets/searchwhite.png";
// import VerfiedLogo from "../../assets/verifiedtick.png";
import OralHealth from "../../assets/oralhealth.png";
import HospitalCenter from "../HospitalCenter/HospitalCenter";
import Navbar from "../Navbar/Navbar";

const MyBookings = ({ appointments }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <div className="floating-search">
        <div className="input-controll input-width">
          <img src={SearchLogo} alt="Search Logo" />
          <input
            type="text"
            placeholder="search by hospital"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button className="search-btn">
          <img src={SearchWhite} alt="Search White" />
          Search
        </button>
      </div>

      {appointments ? (
        <div className="medicalCenters">
          <div>
            <div>
              {appointments.length ? (
                appointments.map((center, index) => (
                  <HospitalCenter center={center} key={index} readOnly />
                ))
              ) : (
                <h1>No bookings yet</h1>
              )}
            </div>

            <img className="oralhealth" src={OralHealth} alt="Oral Health" />
          </div>
        </div>
      ) : (
        <h1 className="Nothing">Please Select State and City</h1>
      )}
    </>
  );
};

export default MyBookings;
