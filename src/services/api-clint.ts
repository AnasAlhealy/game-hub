import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ec51d59598b46e8adc10530540ea0c7",
  },
});
