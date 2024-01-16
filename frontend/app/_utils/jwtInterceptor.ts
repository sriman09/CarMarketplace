import axios, { AxiosResponse } from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://65.2.149.11:8000/api"
    : "http://localhost:8000/api";

const jwtInterceptor = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

jwtInterceptor.interceptors.request.use((config: any) => {
  const accessTokenString: any = localStorage.getItem("userInfo");
  const userInfo: any = accessTokenString
    ? JSON.parse(accessTokenString)
    : null;

  if (userInfo) {
    config.headers["authorization"] = `${userInfo.accessToken}`;
  }
  config._originalContentType = config.headers["Content-Type"];

  return config;
});

export default jwtInterceptor;
