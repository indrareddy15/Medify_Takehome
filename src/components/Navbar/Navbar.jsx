/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import HearderLogo from "../../assets/headerLogo.png";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <img src={HearderLogo} alt="HeaderLogo" />
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
            <button>My Bookings</button>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <a>Find Doctors</a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button>My Bookings</button>
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
