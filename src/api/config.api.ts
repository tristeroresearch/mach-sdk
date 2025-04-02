/**
 * @fileOverview This file contains a function that interacts with the Mach Exchange API to retrieve configuration data.
 * @function apiGetConfig - Retrieves the configuration data from the API.
 * @throws {Error} - If the configuration data is not available.
 */
import { BaseError } from '../errors/baseError.js';
import { ErrorMessage, ErrorName } from '../errors/constants.js';
import { machExchangeApi } from '../libs/axios.js';

export const apiGetConfig = async () => {
  const { data, status } = await machExchangeApi.get('/get_config');
  if (status !== 200) {
    console.error('Failed to fetch config from Mach API');
    throw new BaseError(ErrorName.HTTPError, 200, ErrorMessage.FailedToFetchConfig);
  }
  return data;
};
