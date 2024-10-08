import React from "react";
import "./BlogAndNews.css";
import DetoxLogo from "../../assets/detox.png";
import DoctorLogo from "../../assets/editor.jpg";

const BlogAndNews = () => {
  return (
    <div className="BlogAndNews">
      <h4>Blog & News</h4>
      <h1>Read Our Latest News</h1>
      <div className="blogs">
        <div className="card">
          <img src={DetoxLogo} alt="Detox Logo" />
          <div className="content">
            <h5>
              Medical <span>|</span> March 31, 2022
            </h5>
            <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
            <div className="editor">
              <img src={DoctorLogo} alt="Doctor Logo" />
              <h4>Rebecca Lee</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={DetoxLogo} alt="Detox Logo" />
          <div className="content">
            <h5>
              Medical <span>|</span> March 31, 2022
            </h5>
            <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
            <div className="editor">
              <img src={DoctorLogo} alt="Doctor Logo" />
              <h4>Rebecca Lee</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={DetoxLogo} alt="" />
          <div className="content">
            <h5>
              Medical <span>|</span> March 31, 2022
            </h5>
            <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
            <div className="editor">
              <img src={DoctorLogo} alt="Doctor Logo" />
              <h4>Rebecca Lee</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndNews;
