import axios, { type InternalAxiosRequestConfig } from 'axios';
import { BACKEND_API_URL } from '../configs/env';
import { config as sdkConfig } from '../config';

export const machExchangeApi = axios.create({ baseURL: BACKEND_API_URL });

machExchangeApi.interceptors.request.use(async function (axiosConfig: InternalAxiosRequestConfig) {
  // Get the origin from the SDK config
  const configInstance = await sdkConfig;
  const origin = configInstance.getOrigin();

  if (origin) {
    axiosConfig.headers.set('Origin', origin);
  }

  return axiosConfig;
});
