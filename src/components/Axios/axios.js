import axios from "axios";
console.log("base url", process.env.REACT_APP_BASE_URL);
let API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json",
});
API.defaults.headers.get["Accept"] = "application/json";
API.defaults.headers["Access-Control-Allow-Origin"] = "*";

API.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
API.interceptors.response.use(
    (response) =>{
        return response.data
    },(error)=>{
      return Promise.reject(error.response.data);
    }
)

export default API;
