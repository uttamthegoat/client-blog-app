import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5002/api/v1/blog-app",
  baseURL: "https://server-blog-app-delta.vercel.app/api/v1/blog-app",
  withCredentials: true,
});

export default instance;
