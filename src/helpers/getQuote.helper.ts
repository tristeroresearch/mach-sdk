/**
 * @fileoverview This file contains the helper function to get a quote from the API for a given asset pair and amount.
 */

import { apiGetQuote } from '../api/quote.api';
import { getChainFromAssetAddress } from '../utils/getChainFromAssetAddress.util';
import { createWalletClients } from '../utils/createWalletClients.util';
import { attemptToLoadPrivateKeyFromEnv } from '../utils/attemptToLoadPrivateKeyFromEnv.util';
import { type Hex, type Account } from 'viem';
import { type Asset } from '../@types/asset';

/**
 * A helper function to retrieve a quote for a given asset pair and amount from an API, using a private key to build the wallet client.
 * @param srcAsset - The source asset
 * @param dstAsset - The destination asset
 * @param srcAmount - The source amount
 * @param privateKey - The private key
 * @returns The quote
 */
export const getQuote = async (srcAsset: Asset | Hex, dstAsset: Asset | Hex, srcAmount: string, privateKey?: Hex) => {
  //Throws an error if the private key is not found in the environment
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const srcAssetAddress = typeof srcAsset === 'string' ? srcAsset : srcAsset.address;
  const dstAssetAddress = typeof dstAsset === 'string' ? dstAsset : dstAsset.address;
  const srcChain = await getChainFromAssetAddress(srcAssetAddress);
  const dstChain = await getChainFromAssetAddress(dstAssetAddress);
  const clients = await createWalletClients(srcChain, privateKey);
  const account = clients.account as Account;

  //Throws an error
  const quote = await apiGetQuote(account.address, srcChain, dstChain, srcAssetAddress, dstAssetAddress, srcAmount);
  return quote;
};
