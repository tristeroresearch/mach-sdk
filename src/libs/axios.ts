import axios, { type InternalAxiosRequestConfig } from 'axios';
import { BACKEND_API_URL } from '../configs/env';
import { config as sdkConfig } from '../config';

let machExchangeApi = axios.create({ baseURL: BACKEND_API_URL });

export const recreateMachExchangeApi = (newBaseUrl: string) => {
  machExchangeApi = axios.create({ baseURL: newBaseUrl });
  return machExchangeApi;
};

export { machExchangeApi };
