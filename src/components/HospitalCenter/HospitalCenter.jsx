import React, { useState } from "react";
import HospitalCenterLogo from "../../assets/hptlcenter.png";
import LikeBtnLogo from "../../assets/likebutton.png";
import Appointments from "../Appointments/Appointments";
import "./HospitalCenter.css";

const HospitalCenter = ({
  center,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
  readOnly,
}) => {
  const [showLower, setShowLower] = useState(false);

  console.log("Indra", center);

  return (
    <div className="hospital-center">
      <div className="upper-center">
        <div className="left-img">
          <img src={HospitalCenterLogo} alt="Hospital Center Logo" />
        </div>
        <div className="middle-content">
          {readOnly ? (
            <>
              <h3>{center.hospital}</h3>{" "}
              <h6>
                {center.city}, {center.state}
              </h6>
            </>
          ) : (
            <>
              <h3>{center["Hospital Name"]}</h3>{" "}
              <h6>
                {center.City}, {center.State}
              </h6>
            </>
          )}

          <p>Smilessence Center for Advanced Dentistry + 1</p>
          <p>more</p>
          <div>
            <span className="free-span">FREE</span>
            <span className="price-span">₹500</span>
            <span className="fee-span">Consultation fee at clinic</span>
          </div>
          <div className="like-btn">
            <img src={LikeBtnLogo} alt="Like Btn Logo" />
          </div>
        </div>
        {readOnly ? (
          <div className="rightcontent-mybookings">
            <div className="time">{center.time}</div>
            <div className="date">{center.date}</div>
          </div>
        ) : (
          <div className="rightcontent">
            <p>Available Today</p>
            <button onClick={() => setShowLower(!showLower)}>
              Book FREE Center Visit
            </button>
          </div>
        )}
      </div>

      {showLower && (
        <div className="appointment-content">
          <Appointments
            name={center["Hospital Name"]}
            state={center.State}
            city={center.City}
            appointments={appointments}
            addAppointment={addAppointment}
            availableSlots={availableSlots}
            setAvailableSlots={setAvailableSlots}
          />
        </div>
      )}
    </div>
  );
};

export default HospitalCenter;
