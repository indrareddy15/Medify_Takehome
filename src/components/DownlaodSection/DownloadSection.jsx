import "./DownloadSection.css";
import DownloadSecLogo from "../../assets/downloadsectioncropped.png";
import AppleStoreLogo from "../../assets/apple.png";
import GooglePlayLogo from "../../assets/google.png";
import DownArrowLogo from "../../assets/downarrow.png";

import React from "react";

const DownloadSection = () => {
  return (
    <div className="DownloadSection">
      <img className="mobile" src={DownloadSecLogo} alt="DownloadSec Logo" />
      <img className="downarrow" src={DownArrowLogo} alt="Down Arrow Logo" />
      <div>
        <h2>
          Download the <span>Medify</span> App
        </h2>
        <p>Get the link to download the app</p>
        <div className="input-button">
          <div className="input">
            <div>+91</div>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <button className="Send-SMS">Send SMS</button>
        </div>
        <div className="apple-google">
          <img src={GooglePlayLogo} alt="GooglePlay Logo" />
          <img src={AppleStoreLogo} alt="AppleStore Logo" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
