import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/FooterSection";
import HeaderScroll from "./components/HeaderScroll/HeaderScroll";
import Navbar from "./components/Navbar/Navbar";
// import apiService from "./apiService/apiService";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("states", states)
  console.log("cities", cities)
  // console.log(states)


  const API_BASE_URL = "https://meddata-backend.onrender.com";


  const fetchStates = async () => {
    try {
      // const stateData = await apiService.getStates();
      const response = await fetch(`${API_BASE_URL}/states`)
      if (!response.ok) throw new Error('Failed to fetch states');
      const stateData = await response.json()
      setStates(stateData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching states:", error);
      setLoading(false);
    } finally {
      setLoading(true)
    }
  };

  const fetchCities = async (state) => {
    if (!state) {
      setCities([])
      return
    }
    try {
      // const cityData = await apiService.getCitiesByState(state);
      const response = await fetch(`${API_BASE_URL}/cities/${state}`)
      if (!response.ok) throw new Error('Failed to fetch states');
      const cityData = await response.json()
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
      const response = await fetch(`${API_BASE_URL}/data?state=${state}&city=${city}`)
      if (!response.ok) throw new Error('Failed to fetch states');
      const medicalData = await response.json()
      setMedicalCenters(medicalData);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  }


  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(selectedState);
  }, [selectedState]);

  useEffect(() => {
    fetchMedicalCenters(selectedCity, selectedState);
  }, [selectedCity, selectedState]);

  return (
    <div className="App">
      <HeroSection
        states={states}
        cities={cities}
        selectedState={selectedState}
        selectedCity={selectedCity}
        setSelectedState={setSelectedState}
        setSelectedCity={setSelectedCity}
      />
      <HeaderScroll />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
