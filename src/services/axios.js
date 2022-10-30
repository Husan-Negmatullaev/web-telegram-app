import axios from "axios";

const instance = axios.create({
  baseURL: "https://aviatatravel.com/api"
});

export default instance;