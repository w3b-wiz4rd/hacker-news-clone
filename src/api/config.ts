import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
