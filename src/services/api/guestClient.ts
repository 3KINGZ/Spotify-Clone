import axios from "axios";
import { apiConfig } from "./../../config";

const guestClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default guestClient;

const getUrl = (config: any) => {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, "");
  }
  return config.url;
};

// Intercept all requests
guestClient.interceptors.request.use(
  (config: any) => {
    console.log(
      `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
      "color: #0086b3; font-weight: bold",
      config,
    );
    return config;
  },
  error => Promise.reject(error.response.data),
);

// Intercept all responses
guestClient.interceptors.response.use(
  async response => {
    console.log(
      `%c ${response.status} - ${getUrl(response.config)}:`,
      "color: #008000; font-weight: bold",
      response,
    );
    return response;
  },
  error => {
    console.log(
      `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response,
    );
    return Promise.reject(error.response.data);
  },
);
