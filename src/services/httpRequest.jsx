import axios from "axios";

export default axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  headers: {
    "Content-type": "application/json",
  },
  params: {
    key: "d0b7abc2b79441ef8e993054241303",
  },
});
