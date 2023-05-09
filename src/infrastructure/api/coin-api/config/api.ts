import axios from "axios";

export const apiCap = axios.create({
  // baseURL: "https://pro-api.coinmarketcap.com",
  baseURL: "https://rest.coinapi.io/v1",
  timeout: 1000,
  headers: {
    "X-CoinAPI-Key": "027CB05D-FBF1-4B29-B51C-96FCCD446258",
    Accept: " application/json",
  },
});
