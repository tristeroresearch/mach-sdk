/**
 * @fileOverview This file contains a function that interacts with the Mach Exchange API to retrieve faucet funds for a specified wallet.
 * @function apiGetFaucetFunds - Retrieves the faucet funds for a given wallet address.
 */

/**
 * API function to get the faucet funds
 * @param wallet_address - The address of the wallet
 * @returns The faucet funds
 */

import { machExchangeApi } from '../libs/axios';

export const apiGetFaucetFunds = async (wallet_address: string) => {
  const { data } = await machExchangeApi.get(
    `/faucet?wallet_address=${wallet_address}`,
  );
  return data;
};
