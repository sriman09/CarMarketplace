"use client";
import axios from "axios";

const baseURL = "https://api.srimanvit.tech/api";
// const baseURL = "http://localhost:8000/api";

const jwtInterceptor = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

jwtInterceptor.interceptors.request.use((config: any) => {
  const accessTokenString: any =
    typeof window !== "undefined" ? localStorage.getItem("userInfo") : "";
  const userInfo: any = accessTokenString
    ? JSON.parse(accessTokenString)
    : null;

  if (userInfo) {
    config.headers["authorization"] = `Bearer ${userInfo.accessToken}`;
  }
  config._originalContentType = config.headers["Content-Type"];

  return config;
});

export default jwtInterceptor;
