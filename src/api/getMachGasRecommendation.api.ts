/**
 * @fileOverview This file contains a function that interacts with the Mach Exchange API to retrieve gas recommendations for a specified blockchain network.
 * @function getGasRecommendation - Retrieves gas recommendations for a given network, ensuring the network parameter is provided.
 */

/**
 * Get gas recommendation for a certain chain
 * @param params - Configuration of the requested gas recommendation.
 * @param options - Request options
 * @throws {MachError} Throws a MachError if request fails.
 * @returns Gas recommendation response.
 */

import { machExchangeApi } from '../libs/axios.js';
import { config } from '../config.js';
import { SDKError } from '../errors/SDKError.js';
import { ValidationError } from '../errors/errors.js';
import { ErrorMessage } from '../errors/constants.js';
import { API_VERSION } from '../configs/env.js';
import { BaseError } from 'viem';

export const getMachGasRecommendation = async (
  network: string,
): Promise<any> => {
  if (!network) {
    throw new SDKError(
      new ValidationError(ErrorMessage.NetworkParameterMissing),
    );
  }

  try {
    const url = new URL(
      `${(await config).get().apiUrl}/${API_VERSION}/orders/gas?chain=${network}`,
    );

    const response = await machExchangeApi.get(url.toString());
    if (response.status !== 200) {
      throw new BaseError(ErrorMessage.FailedToFetchGasRecommendation);
    }

    return response.data;
  } catch (error) {
    throw new SDKError(
      new ValidationError(ErrorMessage.FailedToFetchGasRecommendation),
    );
  }
};
