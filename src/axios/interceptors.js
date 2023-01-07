import axios from "axios";

const AuthFetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

AuthFetch.interceptors.request.use(
  (request) => {
    request.common.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {}
);

AuthFetch.interceptors.response.use(
  (response) => {
    console.log("get response");
    return response;
  },
  (error) => {}
);

export default AuthFetch;
