import React from "react";
import "./QuestionSection.css";
import DoctorLogo from "../../assets/doctor.png";
import PlusLogo from "../../assets/PlusLogo.png";
import LikesEmoji from "../../assets/likes.png";
import LoveEmoji from "../../assets/love.png";

const QuestionSection = () => {
  return (
    <div className="QuestionSection">
      <div className="getyourans">Get Your Answer</div>
      <div className="frequent">Frequently Asked Questions</div>
      <div className="imgque">
        <img className="doctor" src={DoctorLogo} alt="Doctor Logo" />
        <img className="likes" src={LikesEmoji} alt="Likes Emoji" />
        <img className="love" src={LoveEmoji} alt="Love Emoji" />

        <div className="que">
          <div>
            <p>Why choose our medical for your family?</p>
            <img src={PlusLogo} alt="Plus Logo" />
          </div>
          <div>
            <p>Why we are different from others?</p>
            <img src={PlusLogo} alt="Plus Logo" />
          </div>
          <div>
            <p>Trusted & experience senior care & love</p>
            <img src={PlusLogo} alt="Plus Logo" />
          </div>
          <div>
            <p>How to get appointment for emergency cases?</p>
            <img src={PlusLogo} alt="Plus Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
