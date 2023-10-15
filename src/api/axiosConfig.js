import axios from "axios";

export default axios.create({
  baseURL: "https://9dd4-50-117-239-144.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
