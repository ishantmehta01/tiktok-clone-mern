import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-ishant.herokuapp.com"
});

export default instance;
