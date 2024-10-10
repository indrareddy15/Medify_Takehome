import React from "react";
import "./FindDoctor.css";

import SearchLogo from "../../assets/searchgrey.png";
import HospitalCenter from "../HospitalCenter/HospitalCenter";
import VerifiedLogo from "../../assets/verifiedtick.png";
import OralHealthLogo from "../../assets/oralhealth.png";
import QuestionSection from "../QuestionsForm/QuestionSection";
import Navbar from "../Navbar/Navbar";

const FindDoctor = ({
  states,
  cities,
  selectedState,
  selectedCity,
  setSelectedState,
  setSelectedCity,
  medicalCenters,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
}) => {
  console.log("Medical Centers", medicalCenters);

  return (
    <>
      <Navbar />

      <div className="section"></div>
      <div className="input-form">
        <div className="input-control">
          <img src={SearchLogo} alt="Search Logo" />
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="input-control">
          <img src={SearchLogo} alt="Search Logo" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <button className="search-btn">
          <img src={SearchLogo} alt="Search" />
          Search
        </button>
      </div>
      {selectedState ? (
        <div className="medicalCenters">
          <div>
            <div className="info">
              <h1>
                {medicalCenters.length} medical centers available in
                {selectedState}
              </h1>
              <h6>
                <img src={VerifiedLogo} alt="" />
                Book appointments with minimum wait-time & verified doctor
                details
              </h6>
            </div>
            {medicalCenters.length ? (
              medicalCenters.map((center, index) => (
                <HospitalCenter
                  center={center}
                  key={index}
                  appointments={appointments}
                  addAppointment={addAppointment}
                  availableSlots={availableSlots}
                  setAvailableSlots={setAvailableSlots}
                />
              ))
            ) : (
              <h1>Loading ...</h1>
            )}
          </div>

          <img src={OralHealthLogo} alt="Oral HealthL ogo" />
        </div>
      ) : (
        <h1 className="Nothing">Please Select State and City</h1>
      )}

      <QuestionSection />
    </>
  );
};

export default FindDoctor;
