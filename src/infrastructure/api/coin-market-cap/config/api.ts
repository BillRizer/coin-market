import axios from "axios";

export const apiCap = axios.create({
  // baseURL: "https://pro-api.coinmarketcap.com",
  baseURL: " https://pro-api.coinmarketcap.com",
  timeout: 1000,
  headers: {
    "X-CMC_PRO_API_KEY": "faa54ca8-94a0-49af-9d9e-6a516188b36e",
    Accept: " application/json",
  },
});
