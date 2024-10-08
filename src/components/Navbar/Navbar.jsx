/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import HearderLogo from "../../assets/headerLogo.png";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <img src={HearderLogo} alt="HeaderLogo" onClick={() => navigate("/")} />
      {sidebarOpen ? (
        <>
          <nav className="sidebar">
            <img
              className="close"
              src={CloseIcon}
              alt="CloseIcon"
              onClick={toggleSidebar}
            />
            <a>Find Doctors</a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilitiesfhgdfg</a>
            <button onClick={() => navigate("/myBookings")}>
              My Bookingsss1234567890
            </button>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <a onClick={() => navigate("/findDoctor")}>Find Doctors</a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button onClick={() => navigate("/myBookings")}>My Bookings</button>
          </nav>
        </>
      )}

      <img
        src={MenuIcon}
        alt="MenuIcon"
        className="menu"
        onClick={toggleSidebar}
      />
    </header>
  );
};

export default Navbar;
