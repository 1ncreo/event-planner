import api from "./api"; // Import the Axios instance

/**
 * Register a new user
 * @param {Object} userData - The registration details (e.g., name, email, password)
 * @returns {Promise} Axios promise
 */
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error registering user";
  }
};

/**
 * Log in a user
 * @param {Object} loginData - The login details (e.g., email, password)
 * @returns {Promise} Axios promise
 */
export const loginUser = async (loginData) => {
  try {
    const response = await api.post("/auth/login", loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error logging in user";
  }
};

/**
 * Get the current logged-in user's profile
 * @returns {Promise} Axios promise
 */
export const getProfile = async () => {
  try {
    const response = await api.get("/auth/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error fetching user profile";
  }
};

/**
 * Log out the current user
 * @returns {Promise} Axios promise
 */
export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error logging out";
  }
};
