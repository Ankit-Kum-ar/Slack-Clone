import axios from "axios"; 

// Use environment variable for base URL, default to localhost if not set
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5500/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Include cookies in requests
});