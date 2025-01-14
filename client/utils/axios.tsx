import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_LOCALHOST_URL;

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const { token } = parseCookies();

    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default axios;