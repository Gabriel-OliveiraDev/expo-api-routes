import axios from "axios";

export const api = axios.create({
  // só funciona em dispositivo mobile
  baseURL: "https://expo-api-routes-seven.vercel.app"
})