import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers["auth-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgwZDQ5YmIxMWY3ZTE2MjQyNTNiYzQiLCJuYW1lIjoibGUgdmFuIGJpbmgiLCJlbWFpbCI6InRoYW5oYmluaDE5MTA5OUBnbWFpbC5jb20iLCJyb2xlIjoyLCJpYXQiOjE2NTMwMzU4MDQsImV4cCI6MTY2MTY3NTgwNH0.KPxp4pDxLd9NjAWbGSFtPWrAGicJlGnnvCY9B5wyo2A";
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
