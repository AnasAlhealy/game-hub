import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c2f1c21bd0de4095af8a9dfa79580708",
  },
});
