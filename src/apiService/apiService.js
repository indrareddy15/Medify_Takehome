const { default: axios } = require("axios");

const API_BASE_URL = "https://meddata-backend.onrender.com";

const apiService = {
  getStates: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/states`);
      console.log("States Res", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in fetching States: ", error);
      throw error;
    }
  },

  getCitiesByState: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cities/:state`);
      return response.data;
    } catch (error) {
      console.error("Error in fetching :", error);
      throw error;
    }
  },

  getMedicalCenters: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/data?state=<state-name>&city=<city-name>`
      );
      return response.data;
    } catch (error) {
      console.error("Error in fetching", error);
      throw error;
    }
  },
};

console.log(apiService.getStates())

// export default apiService;
