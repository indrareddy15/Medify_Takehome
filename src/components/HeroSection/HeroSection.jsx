import React from "react";
import "./HeroSection.css";
import Navbar from "../Navbar/Navbar";
import DoctorLogo from "../../assets/Doctorlogo.png";
import DrugStore from "../../assets/Drugstore.png";
import Hospital from "../../assets/Hospital.png";
import Capsule from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import SearchGrey from "../../assets/searchgrey.png";
import HeroLogo from "../../assets/hero.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import SwiperCard30 from "../../assets/Card30.png";
import SwiperCard100 from "../../assets/Card100.png";
import Specialisation from "../Specialisation/Specialisation";
import OurTeam from "../OurTeam.jsx/OurTeam";
import PatientCaring from "../PatientCaring/PatientCaring";
import BlogAndNews from "../BlogsAndNews/BlogAndNews";
import OurFamilySection from "../OurFamilySection/OurFamilySection";
import QuestionSection from "../QuestionsForm/QuestionSection";
import { useNavigate } from "react-router-dom";

const HeroSection = ({
  states,
  cities,
  selectedState,
  selectedCity,
  setSelectedState,
  setSelectedCity,
}) => {
  const navigate = useNavigate();

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
              <img src={SearchGrey} alt="Search Icon" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select a State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-control">
              <img src={SearchGrey} alt="Search Icon" />
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
              <img src={SearchGrey} alt="Search" />
              Search
            </button>
          </div>

          <h5>You may be looking for</h5>
          <div className="img-category">
            <div>
              <img src={DoctorLogo} alt="Doctor Logo" />
              <h6>Doctors</h6>
            </div>
            <div>
              <img src={DrugStore} alt="Drug Store Logo" />
              <h6>Labs</h6>
            </div>
            <div>
              <img src={Hospital} alt="Hospital Logo" />
              <h6>Hospitals</h6>
            </div>
            <div>
              <img src={Capsule} alt="Capsule Logo" />
              <h6>Medical Store</h6>
            </div>
            <div>
              <img src={Ambulance} alt="Ambulance Logo" />
              <h6>Ambulance</h6>
            </div>
          </div>
        </div>

        <div className="swiper-card">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: 1250 }}
          >
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard30} alt="Swiper Card 30" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard30} alt="Swiper Card 30" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-card-sm">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: 300 }}
          >
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard30} alt="Swiper Card 30" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard30} alt="Swiper Card 30" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="card" src={SwiperCard100} alt="Swiper Card 100" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Specialisation />
      <OurTeam />
      <PatientCaring />
      <BlogAndNews />
      <OurFamilySection />
      <QuestionSection />
    </>
  );
};

export default HeroSection;
