// src/api/axiosInstance.ts

import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://113.198.66.75:13024",
    withCredentials: true,
});