import axios from "axios";

const instance = axios.create({
  baseURL: "http://64.225.58.67:300/api"
});


export default instance;