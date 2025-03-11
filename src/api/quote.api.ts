/**
 * @fileOverview This file contains the apiGetQuote function which interacts with the Mach Exchange API to retrieve a quote for a given asset pair and amount.
 * @function apiGetQuote - Sends a POST request to the Mach Exchange API with the specified parameters to obtain a quote.
 */

import { ErrorMessage } from '../errors/constants';
import { machExchangeApi } from '../libs/axios';
import { type Quote } from '../@types/quote';
//Example quote
// {
//   "wallet_address": "0xexample1",
//   "target_address": "0xexample2",
//   "src_chain": "arbitrum",
//   "dst_chain": "optimism",
//   "src_asset_address": "0xexample3",
//   "dst_asset_address": "0xexample4",
//   "src_amount": 20000 //20,000 units of USDC == $0.02
// }

//TODO: Support destination wallet address

/**
 * API function to get a quote from the Mach Exchange API
 * @param walletAddress - The address of the wallet
 * @param srcChain - The source chain
 * @param dstChain - The destination chain
 * @param srcAssetAddress - The source asset address
 * @param dstAssetAddress - The destination asset address
 * @param srcAmount - The source amount
 * @returns The quote
 */

export const apiGetQuote = async (
  walletAddress: string,
  srcChain: string,
  dstChain: string,
  srcAssetAddress: string,
  dstAssetAddress: string,
  srcAmount: string,
) => {
  const payload = {
    wallet_address: walletAddress,
    target_address: walletAddress,
    src_chain: srcChain.toLowerCase(),
    dst_chain: dstChain.toLowerCase(),
    src_asset_address: srcAssetAddress,
    dst_asset_address: dstAssetAddress,
    src_amount: srcAmount,
  };
  const response = await machExchangeApi.post<Quote>('/v1/quotes', payload);
  if (response.status !== 200) throw new Error(ErrorMessage.FailedToFetchQuote);
  return response.data;
};
