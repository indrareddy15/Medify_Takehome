import React from "react";
import HeaderLogo from "../../assets/headerLogo.png";
import LeftArrow from "../../assets/arrow.png";
import FacebookLogo from "../../assets/facebook.png";
import PintrestLogo from "../../assets/pintrest.png";
import TwitterLogo from "../../assets/twitter.png";
import YoutubeLogo from "../../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="logo">
          <img src={HeaderLogo} alt="HeaderLogo" />
          <div>
            <img src={FacebookLogo} alt="FacebookLogo" />
            <img src={PintrestLogo} alt="PintrestLogo" />
            <img src={TwitterLogo} alt="TwitterLogo" />
            <img src={YoutubeLogo} alt="YoutubeLogo" />
          </div>

          <div className="aboutus-col">
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              About Us
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Our Pricing
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Our Gallery
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Appointment
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Privacy Policy
            </i>
          </div>
          <div className="aboutus-col">
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Orthology
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Neurology
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Dental Care
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Opthalmology
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Cardiology
            </i>
          </div>
          <div className="aboutus-col sm">
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              About Us
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Our Pricing
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Our Gallery
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Appointment
            </i>
            <i>
              <img className="left-arrow" src={LeftArrow} alt="LeftArrow" />
              Privacy Policy
            </i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
