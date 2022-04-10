//@ts-ignore
import axios from "axios";

const baseUrl = "https://accounts.spotify.com";
const baseUrl2 = "https://api.spotify.com";

export const apiConfig = {
  baseUrl,
  baseUrl2,
};

export const request = axios.CancelToken.source();
