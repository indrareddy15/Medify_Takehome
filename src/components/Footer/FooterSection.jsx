import React from "react";
import "./FooterSection.css";
import HeaderLogo from "../../assets/headerLogo.png";
import LeftArrow from "../../assets/arrow.png";
import FacebookLogo from "../../assets/facebook.png";
import PintrestLogo from "../../assets/pintrest.png";
import TwitterLogo from "../../assets/twitter.png";
import YoutubeLogo from "../../assets/youtube.png";

const Footer = () => {
  return (
    <div className="FooterSection">
      <div className="footer">
        <div className="footerlogo">
          <img src={HeaderLogo} alt="logo" />
          <div>
            <img src={FacebookLogo} alt="facebook" />
            <img src={TwitterLogo} alt="twitter" />
            <img src={YoutubeLogo} alt="youtube" />
            <img src={PintrestLogo} alt="pintrest" />
          </div>
        </div>

        <div className="col-1">
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Privacy Policy
          </i>
        </div>
        <div className="col-1">
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Orthology
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Neurology
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Dental Care
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Opthalmology
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Cardiology
          </i>
        </div>
        <div className="col-1 sm">
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={LeftArrow} alt="arrow" />
            Privacy Policy
          </i>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
