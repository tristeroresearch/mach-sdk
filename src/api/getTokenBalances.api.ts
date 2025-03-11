/**
 * @fileOverview This file contains functions that interact with the Mach Exchange API to retrieve token balances for a wallet.
 * @function getTokenBalance - Returns the balance of a specific token a wallet holds across all aggregated chains.
 * @function getTokenBalances - Returns the balances for a list of tokens a wallet holds across all aggregated chains.
 */

import { machExchangeApi } from '../libs/axios';
import { type Asset } from '../@types/asset';

//TODO:: Use token parameter in getTokenBalance
/**
 * Returns the balances of a specific token a wallet holds across all aggregated chains.
 * @param walletAddress - A wallet address.
 * @param token - A Token object.
 * @returns An object containing the token and the amounts on different chains.
 * @throws {BaseError} Throws a ValidationError if parameters are invalid.
 */
export const getTokenBalance = async (
  walletAddress: string,
  token: Asset,
): Promise<string | null> => {
  const tokenAmounts = await getTokenBalances(walletAddress);
  return tokenAmounts.length ? tokenAmounts[0] : null;
};

/**
 * Returns the balances for a list tokens a wallet holds  across all aggregated chains.
 * @param walletAddress - A wallet address.
 * @param tokens - A list of Token objects.
 * @returns A list of objects containing the tokens and the amounts on different chains.
 * @throws {BaseError} Throws a ValidationError if parameters are invalid.
 */
export const getTokenBalances = async (walletAddress: string): Promise<any> => {
  const tokenAmounts = (
    await machExchangeApi.get(`/tokenBalances?wallet=${walletAddress}`)
  ).data;
  return tokenAmounts.data;
};
