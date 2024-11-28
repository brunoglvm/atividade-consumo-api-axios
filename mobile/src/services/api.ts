import axios from "axios";
import { EXPO_BASE_URL } from "@env";

const BASE_URL = `http://${EXPO_BASE_URL}:3000/api`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(BASE_URL);

export default api;
