import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:8000/api";

const jwtInterceptor = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

jwtInterceptor.interceptors.request.use((config: any) => {
  const accessTokenString: string | null = localStorage.getItem("accessToken");
  const userInfo: string | null = accessTokenString ? accessTokenString : null;

  if (userInfo) {
    config.headers["authorization"] = `bearer ${userInfo}`;
  }
  config._originalContentType = config.headers["Content-Type"];

  return config;
});

export default jwtInterceptor;
