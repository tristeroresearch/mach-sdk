/**
 * @fileOverview This file contains functions that interact with the Mach Exchange API to retrieve pricing and asset information.
 * @function apiGetNativeTokenPrices - Retrieves the prices of native tokens.
 * @returns The native token prices
 * @function apiGetAssets - Retrieves asset information for a specified blockchain network.
 * @returns The asset information
 */

import { machExchangeApi } from '../libs/axios';

export const apiGetNativeTokenPrices = async () => {
  const { data } = await machExchangeApi.get('/gas_token_prices');
  return data;
};

export const apiGetAssets = async (chainName: string) => {
  const { data } = await machExchangeApi.get('/get_assets', {
    params: { chain_name: chainName.toLowerCase() },
  });

  return data;
};
