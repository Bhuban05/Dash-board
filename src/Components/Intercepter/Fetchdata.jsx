// fetchData.js
import api from "./api"; // Import the Axios instance

const fetchData = async () => {
  try {
    const response = await api.get("/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Optionally, you can export the function if needed
export default fetchData;