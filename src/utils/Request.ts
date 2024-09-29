import axios from "axios";

const request = axios.create({
  baseURL: "/api/qb",
});


export default request;
