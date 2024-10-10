import React, { useState, useEffect } from "react";
import "../DialogModel/Model.css"; // Your existing modal styles

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || !email) {
      setSnackbarMessage("Please fill in all fields.");
      setSnackbarOpen(true);
      return;
    }
    onSubmit({ phoneNumber, email });

    
    setSnackbarMessage("Appointment booked successfully!");
    setSnackbarOpen(true);
  };

  useEffect(() => {
    let timeoutId;
    if (snackbarOpen) {
      timeoutId = setTimeout(() => {
        setSnackbarOpen(false);
        onClose();
      }, 3000);
    }

    return () => clearTimeout(timeoutId); 
  }, [snackbarOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
        {snackbarOpen && (
          <div
            className={`snackbar show`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {snackbarMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
