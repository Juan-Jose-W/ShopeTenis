import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
    baseURL: apiUrl
})

export default apiClient;