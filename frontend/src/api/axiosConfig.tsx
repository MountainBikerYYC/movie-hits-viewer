import axios from "axios";

export default axios.create({
  //baseURL: "https://9c96-103-106-239-104.ap.ngrok.io",
  baseURL: "http://localhost:5000",
  headers: { "ngrok-skip-browser-warning": "true" },
});
