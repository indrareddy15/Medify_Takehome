import React from "react";
import Navbar from "../Navbar/Navbar";
import DoctorLogo from "../../assets/Doctorlogo.png";
import DrugStore from "../../assets/Drugstore.png";
import Hospital from "../../assets/Hospital.png";
import Capsule from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import SearchGrey from "../../assets/searchgrey.png";
import HeroLogo from "../../assets/hero.png";

const HeroSection = ({
  states,
  cities,
  selectedState,
  selectedCity,
  setSelectedState,
  setSelectedCity,
}) => {
  return (
    <>
      <div className="hero-section">
        <Navbar />
        <div className="hero-content">
          <div className="hero-text">
            <h3>
              Skip the travel! Find Online <span>Medical</span>
              <span>Centers</span>
            </h3>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button>Find Centers</button>
          </div>
          <img src={HeroLogo} alt="Hero Logo" />
        </div>

        <div className="floating-div">
          <div className="input-form">
            <div className="input-control">
              <img src={SearchGrey} alt="" srcset="" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option>Select a State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-control">
              <img src={SearchGrey} alt="" srcset="" />
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
              <img src="" alt="" />
              Search
            </button>
          </div>

          <h5>You may be looking for</h5>
          <div className="category">
            <div>
              <img src={DoctorLogo} alt="" />
              <h6>Doctors</h6>
            </div>
            <div>
              <img src={DrugStore} alt="" />
              <h6>Labs</h6>
            </div>
            <div>
              <img src={Hospital} alt="" />
              <h6>Hospitals</h6>
            </div>
            <div>
              <img src={Capsule} alt="" />
              <h6>Medical store</h6>
            </div>
            <div>
              <img src={Ambulance} alt="" />
              <h6>Ambulance</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
