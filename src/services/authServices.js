import { LOCAL_STORAGE_USER_KEY } from "../constant/constant";
import axiosClient from "./axiosClient";
const Auth = {
  login: (body) => {
    const url = "/auth/login";
    return axiosClient.post(url, body).then((res) => {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(res.result));
      return res;
    });
  },
};

export default Auth;
