/**
 * @fileoverview This file contains the helper function to place an order between two assets.
 */

import { getQuote, submitOrder, dollarToTokenValue, getChainFromAssetAddress } from '../index';
import { marketMakeOrder } from './marketMakeOrder.helper';
import { ErrorMessage } from '../errors/constants';
import { attemptToLoadPrivateKeyFromEnv } from '../utils/attemptToLoadPrivateKeyFromEnv.util';
import { type Asset } from '../@types/asset';
import { type Hex } from 'viem';
import { type GasData } from '../@types/gasData';

/**
 * A helper function to place an order between two assets by converting asset amounts, retrieving quotes, submitting orders, and completing market-making processes.
 * @param srcAsset - The source asset
 * @param dstAsset - The destination asset
 * @param srcAmount - The source amount
 * @param gasData - The gas data for the transaction
 * @returns The response from the order data api
 */
export const order = async (
  srcAsset: Asset | Hex,
  dstAsset: Asset | Hex,
  srcAmount: number,
  referralCode?: string,
  gasData?: GasData,
  privateKey?: Hex
) => {
  //Throws an error if the private key is not found in the environment
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const srcAssetAddress: Hex = typeof srcAsset === 'string' ? (srcAsset as Hex) : (srcAsset.address as Hex);
  const dstAssetAddress: Hex = typeof dstAsset === 'string' ? (dstAsset as Hex) : (dstAsset.address as Hex);
  const amount = await dollarToTokenValue(srcAmount, srcAssetAddress);
  const quote = await getQuote(srcAssetAddress, dstAssetAddress, amount, privateKey);
  const receipt = await submitOrder(quote, privateKey, gasData);
  if (receipt == null) throw new Error(ErrorMessage.TransactionNotFound);
  const srcChain = await getChainFromAssetAddress(srcAssetAddress);
  const response = await marketMakeOrder(srcChain, receipt, referralCode);
  return response;
};
