import axios from "axios";
import base64 from "react-native-base64";

import { apiConfig } from "../../config";

import { storeValue } from "./../../utils/cache";

const tokenClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: "application/json",
    Authorization:
      "Basic " +
      base64.encode(
        "dbaa2a9778c34c189936592c55ebd4d4" +
          ":" +
          "5d80426a44aa4813bf1464064b4aea1b",
      ),
  },
});

function getUrl(config: any) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, "");
  }
  return config.url;
}

// Intercept all request
tokenClient.interceptors.request.use(
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
tokenClient.interceptors.response.use(
  async response => {
    console.log("succ", response.data);
    console.log(
      `%c ${response.status} - ${getUrl(response.config)}:`,
      "color: #008000; font-weight: bold",
      response.headers["set-auth"],
      response,
    );
    if (response.status == 200) {
      console.log("storing");
      storeValue("@token", JSON.stringify(response.data?.access_token));
    }
    return response;
  },
  error => {
    if (error.response.status === 401) {
      //err
    }
    console.log(
      `%c ${error.response.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response,
    );
    return Promise.reject(error.response.data);
  },
);

export default tokenClient;
