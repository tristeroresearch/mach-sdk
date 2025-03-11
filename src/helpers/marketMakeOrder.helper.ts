import { encodeEventTopics } from 'viem';
import { processReceipt } from './processReceipt.helper.js';
import { abi } from '../index.js';
import { getChainFromContractAddress } from '../utils/getChainFromContractAddress.util.js';
import { marketMake } from '../api/marketMake.api.js';
import { EventName } from '../enums/index.js';
import { ErrorMessage } from '../errors/constants.js';

/**
 * A helper function to process a transaction receipt and interact with an API to complete the market-making process.
 * @param srcChain - The chain to make the order on
 * @param receipt - The receipt of the transaction
 * @returns The response from the order data api
 * @description This helper function processes a transaction receipt to extract order data and interacts with an API to complete the market-making process.
 * @todo Get srcChain from receipt
 */
export const marketMakeOrder = async (srcChain: string, receipt: any) => {
  const encodedEventTopics = encodeEventTopics({
    abi: abi.orderBook,
    eventName: EventName.OrderPlaced,
    args: [],
  })[0];

  if (receipt == null) throw new Error(ErrorMessage.TransactionNotFound);
  if (getChainFromContractAddress(receipt.to) != srcChain)
    throw new Error(ErrorMessage.TransactionOnDifferentChain);

  const decodedData = processReceipt(receipt, encodedEventTopics, srcChain);

  const response = await marketMake(decodedData[0]);
  return response;
};
