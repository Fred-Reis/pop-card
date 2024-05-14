import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    accept: "application/json",
  },
});

export default instance;