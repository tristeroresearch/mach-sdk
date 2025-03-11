/**
 * Helper function to process a transaction receipt
 * @description This helper function processes a transaction receipt to extract and decode order-related information from event logs.
 */
import { GetTransactionReceiptReturnType, decodeEventLog } from 'viem';
import { abi } from '../index.js';

export const processReceipt = (
  receipt: GetTransactionReceiptReturnType,
  encodedEventTopics: `0x${string}` | '',
  sellChain: string,
) => {
  const orderPlacedLogs = receipt.logs.filter(
    (log: any) => log.topics[0] === encodedEventTopics,
  );

  const decodedLogs = orderPlacedLogs.map((log) => {
    const { args }: { args: any } = decodeEventLog({
      abi: abi.orderBook,
      data: log.data,
      topics: log.topics,
    });

    return {
      srcToken: args['src_token'] || args?.direction?.srcAsset,
      dstToken: args['dst_token'] || args?.direction?.dstAsset,
      lzCid: args['lz_cid']?.toString() || args?.direction?.dstLzc?.toString(),
      orderIndex:
        args['order_index']?.toString() || args['orderIndex']?.toString(),
      fee: args['fee']?.toString() || args?.funding?.bondFee?.toString(),
      transactionHash: log.transactionHash,
      sellChain: sellChain.toLowerCase(),
    };
  });

  return decodedLogs;
};
