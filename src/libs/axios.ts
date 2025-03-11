import axios, { type InternalAxiosRequestConfig } from 'axios';
import { BACKEND_API_URL } from '../configs/env';

export const machExchangeApi = axios.create({ baseURL: BACKEND_API_URL });

machExchangeApi.interceptors.request.use(function (
  config: InternalAxiosRequestConfig,
) {
  return config;
});
