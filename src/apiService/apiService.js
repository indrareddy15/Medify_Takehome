import axios from "axios"

const API_BASE_URL = "https://meddata-backend.onrender.com";

const apiService = {
  getStates: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/states`);
      return response.data;
    } catch (error) {
      console.error("Error in fetching States: ", error);
      throw error;
    }
  },

  getCitiesByState: async (state) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cities/${state}`);
      return response.data;
    } catch (error) {
      console.error("Error in fetching :", error);
      throw error;
    }
  },

  getMedicalCenters: async (state, city) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/data?state=${state}&city=${city}`
      );
      return response.data;
    } catch (error) {
      console.error("Error in fetching", error);
      throw error;
    }
  },
};

// console.log(apiService.getStates())

export default apiService;
