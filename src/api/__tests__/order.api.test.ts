import { machExchangeApi } from '../../libs/axios';
import { marketMake } from '../marketMake.api';
import { ResultCode, OrderResponseMessage } from '../../enums';
import { type AxiosResponse, type AxiosRequestHeaders } from 'axios';

// Automatically mock the axios module
jest.mock('../../libs/axios');

const mockedAxios = machExchangeApi as jest.Mocked<typeof machExchangeApi>;

describe('apiSendOrderData', () => {
  const orderData = {
    sellChain: 'chain1',
    transactionHash: 'hash1',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle 200 status correctly', async () => {
    const mockResponse: AxiosResponse = {
      data: { eta: '5 mins', id: 'order123' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { headers: {} as AxiosRequestHeaders },
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.OrderSent,
      status: ResultCode.Pending,
      eta: '5 mins',
      id: 'order123',
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });

  it('should handle 202 status correctly', async () => {
    const mockResponse: AxiosResponse = {
      data: { eta: '10 mins' },
      status: 202,
      statusText: 'Accepted',
      headers: {},
      config: { headers: {} as AxiosRequestHeaders },
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.OrderPending,
      status: ResultCode.Pending,
      eta: '10 mins',
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });

  it('should handle 400 status correctly', async () => {
    const mockResponse: AxiosResponse = {
      data: { error: 'Bad Request' },
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: { headers: {} as AxiosRequestHeaders },
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.OrderNotFilled,
      status: ResultCode.Failure,
      errorobj: { error: 'Bad Request' },
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });

  it('should handle 422 status correctly', async () => {
    const mockResponse: AxiosResponse = {
      data: { error: 'Unprocessable Entity' },
      status: 422,
      statusText: 'Unprocessable Entity',
      headers: {},
      config: { headers: {} as AxiosRequestHeaders },
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.PayloadError,
      status: ResultCode.Failure,
      errorobj: { error: 'Unprocessable Entity' },
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });

  it('should handle unexpected status correctly', async () => {
    const mockResponse: AxiosResponse = {
      data: { error: 'Internal Server Error' },
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: { headers: {} as AxiosRequestHeaders },
    };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.UnexpectedError,
      status: ResultCode.Failure,
      errorobj: { error: 'Internal Server Error' },
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });

  it('should handle network errors correctly', async () => {
    const mockError = new Error('Network Error');
    mockedAxios.post.mockRejectedValueOnce(mockError);

    const response = await marketMake(orderData);

    expect(response).toEqual({
      message: OrderResponseMessage.UnspecifiedError,
      status: ResultCode.Failure,
      errorobj: mockError,
    });
    expect(mockedAxios.post).toHaveBeenCalledWith('/v1/orders', {
      chain: 'chain1',
      place_taker_tx: 'hash1',
    });
  });
});
