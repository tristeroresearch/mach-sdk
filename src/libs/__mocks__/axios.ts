import { jest } from '@jest/globals';
import {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';

// Define the function types
type PostFn = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => Promise<AxiosResponse<any>>;
type GetFn = (
  url: string,
  config?: AxiosRequestConfig,
) => Promise<AxiosResponse<any>>;
// Define types for other methods as needed

// Create a mock Axios instance with properly typed methods
const mockAxiosInstance: Partial<AxiosInstance> = {
  post: jest.fn<PostFn>(),
  get: jest.fn<GetFn>(),
  put: jest.fn<PostFn>(),
  delete: jest.fn<GetFn>(),
  patch: jest.fn<PostFn>(),

  // Mock interceptors
  interceptors: {
    request: {
      use: jest.fn(),
      eject: jest.fn(),
    },
    response: {
      use: jest.fn(),
      eject: jest.fn(),
    },
  },

  // Mock defaults if your application uses them
  defaults: {},
} as unknown as jest.Mocked<AxiosInstance>;

export const machExchangeApi = mockAxiosInstance;

// Mock the default Axios export with a `create` method
export default {
  create: jest.fn(() => mockAxiosInstance),
};
