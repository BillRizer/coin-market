import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3030/v1/',
    timeout: 1000,
  });