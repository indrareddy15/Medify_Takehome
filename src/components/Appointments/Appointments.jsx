import "./Appointments.css";
import React, { useState, useRef } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Modal from "./DialogModel/Model";

const Appointments = ({
  name,
  state,
  city,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
}) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const swiperRef = useRef(null);

  const handleDaySelect = (index) => {
    setSelectedDay(index);
    setSelectedSlot("");
    setActiveSlide(index);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true); // Open the modal when a slot is selected
  };

  const handleModalSubmit = ({ phoneNumber, email }) => {
    const updatedAvailableSlots = availableSlots.map((day) => ({
      ...day,
      morning: day.morning.filter((item) => item !== selectedSlot),
      afternoon: day.afternoon.filter((item) => item !== selectedSlot),
      evening: day.evening.filter((item) => item !== selectedSlot),
    }));

    setAvailableSlots(updatedAvailableSlots);
    addAppointment(
      name,
      availableSlots[selectedDay].day,
      selectedSlot,
      state,
      city,
      phoneNumber,
      email
    );
    setIsModalOpen(false); // Close modal after submission
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="appointments">
      <div className="appointments-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation]}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {availableSlots.map((slot, index) => (
            <SwiperSlide key={index} onClick={() => handleDaySelect(index)}>
              <div className={`slide ${activeSlide === index ? "active" : ""}`}>
                <h1>{slot.day}</h1>
                <span>
                  {slot.morning.length +
                    slot.afternoon.length +
                    slot.evening.length}{" "}
                  slots available
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
      <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
      <div className="slots">
        {selectedDay >= 0 && (
          <>
            <div className="day morning">
              <h3>Morning</h3>
              {availableSlots[selectedDay].morning.map((slot) => (
                <div
                  key={slot}
                  className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                  onClick={() => handleSlotSelect(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>
            <div className="day afternoon">
              <h3>Afternoon</h3>
              {availableSlots[selectedDay].afternoon.map((slot) => (
                <div
                  key={slot}
                  className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                  onClick={() => handleSlotSelect(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>
            <div className="day evening">
              <h3>Evening</h3>
              {availableSlots[selectedDay].evening.map((slot) => (
                <div
                  key={slot}
                  className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                  onClick={() => handleSlotSelect(slot)}
                >
                  {slot}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Appointments;
