import React, { useState } from "react";
import HearderLogo from "../../assets/headerLogo.png";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import "./Navbar.css";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="header">
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
            <a href="/">Find Doctors</a>
            <a href="/">Hospitals</a>
            <a href="/">Medicines</a>
            <a href="/">Surgeries</a>
            <a href="/">Software for Provider</a>
            <a href="/">Fecilities</a>
            <button>My Bookings</button>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <a href="/">Find Doctors</a>
            <a href="/">Hospitals</a>
            <a href="/">Medicines</a>
            <a href="/">Surgeries</a>
            <a href="/">Software for Provider</a>
            <a href="/">Fecilities</a>
            <button>My Bookings</button>
          </nav>
        </>
      )}
      <img src={MenuIcon} alt="MenuIcon" className="menu" />
    </header>
  );
}

export default Navbar;
