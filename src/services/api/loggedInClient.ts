import { routes } from "navigation/routes";
import axios from "axios";

import { apiConfig } from "config";
import { getValue, RootNavigation, deleteItem } from "utils";

const getAccessToken = async () => {
  try {
    let token: any = await getValue("@token");
    token = JSON.parse(token);

    console.log("tk", token);

    if (token !== null) {
      // const item = JSON.parse(retrievedItem);
      // console.log(item);
      const authorization = "Bearer " + token;
      return authorization;
    }
    return null;
  } catch (error) {
    // Err
  }
};

const loginClient = axios.create({
  baseURL: apiConfig.baseUrl2,
  headers: {
    Accept: "application/json",
  },
});

const getLoginClient = async () => {
  loginClient.defaults.headers.common.Authorization = await getAccessToken();
  return loginClient;
};

export default getLoginClient;

function getUrl(config: any) {
  if (config?.baseUrl2) {
    return config.url.replace(config?.baseURL2, "");
  }
  return config?.url;
}

// Intercept all requests
loginClient.interceptors.request.use(
  (config: any) => {
    console.log(
      `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
      "color: #0086b3; font-weight: bold",
      config,
    );
    return config;
  },
  error => Promise.reject(error),
);

// Intercept all responses
loginClient.interceptors.response.use(
  async response => {
    if (response?.status === 401 || response?.status === 403) {
      try {
        deleteItem("@token");
        RootNavigation.navigate(routes.appTab);
      } catch (error) {
        // Error retrieving data
        console.log(error, "logged in client error");
        Promise.reject(error);
      }
    }
    console.log(
      `%c ${response?.status} - ${getUrl(response.config)}:`,
      "color: #008000; font-weight: bold",
      response,
    );
    return response;
  },
  error => {
    console.log(error);
    if (error.response?.status === 403 || error.response?.status === 401) {
      //logout here
    }
    console.log(error, "error console");
    // if (error.response.status === 429) {
    //   Alert.alert("Too many requests. Please try again later.");
    // }
    console.log(
      `%c ${error.response?.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response,
    );
    return Promise.reject(error);
  },
);
