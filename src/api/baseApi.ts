import axios from 'axios';

export const BASE_URL = "https://swapi.dev/api";

export const instance = axios.create({
  baseURL: BASE_URL
});