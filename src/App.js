import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/FooterSection";
import HeaderScroll from "./components/HeaderScroll/HeaderScroll";
import Navbar from "./components/Navbar/Navbar";
// import apiService from "./apiService/apiService";
import HeroSection from "./components/HeroSection/HeroSection";
import appointDates from "./Appointments.js";
import FindDoctor from "./components/FindDoctor/FindDoctor";
import MyBookings from "./components/MyBookings/MyBookings.jsx";
import DownloadSection from "./components/DownlaodSection/DownloadSection.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (hospital, city, time, state) => {
    setAppointments([...appointments, { hospital, city, time, state }]);
  };

  const [availableSlots, setAvailableSlots] = useState(appointDates);

  const API_BASE_URL = "https://meddata-backend.onrender.com";

  const fetchStates = async () => {
    try {
      // const stateData = await apiService.getStates();
      const response = await fetch(`${API_BASE_URL}/states`);
      if (!response.ok) throw new Error("Failed to fetch states");
      const stateData = await response.json();
      setStates(stateData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching states:", error);
      setLoading(false);
    } finally {
      setLoading(true);
    }
  };

  const fetchCities = async (state) => {
    if (!state) {
      setCities([]);
      return;
    }
    try {
      // const cityData = await apiService.getCitiesByState(state);
      const response = await fetch(`${API_BASE_URL}/cities/${state}`);
      if (!response.ok) throw new Error("Failed to fetch states");
      const cityData = await response.json();
      setCities(cityData);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchMedicalCenters = async (state, city) => {
    if (!state || !city) {
      setMedicalCenters([]);
      return;
    }
    try {
      // const medicalData = await apiService.getMedicalCenters(state, city);
      const response = await fetch(
        `${API_BASE_URL}/data?state=${state}&city=${city}`
      );
      if (!response.ok) throw new Error("Failed to fetch states");
      const medicalData = await response.json();
      setMedicalCenters(medicalData);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(selectedState);
  }, [selectedState]);

  useEffect(() => {
    fetchMedicalCenters(selectedState, selectedCity);
  }, [selectedState, selectedCity]);

  return (
    <>
      <HeaderScroll />
      <Routes>
        <Route
          path="/"
          element={
            <HeroSection
              states={states}
              cities={cities}
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedState={setSelectedState}
              setSelectedCity={setSelectedCity}
            />
          }
        />
        <Route
          path="/findDoctor"
          element={
            <FindDoctor
              states={states}
              cities={cities}
              selectedState={selectedState}
              selectedCity={selectedCity}
              setSelectedState={setSelectedState}
              setSelectedCity={setSelectedCity}
              medicalCenters={medicalCenters}
              appointments={appointments}
              addAppointment={addAppointment}
              availableSlots={availableSlots}
              setAvailableSlots={setAvailableSlots}
            />
          }
        />

        <Route
          path="/myBookings"
          element={<MyBookings appointments={appointments} />}
        />
      </Routes>

      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
