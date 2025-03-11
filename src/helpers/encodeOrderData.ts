/**
 * A helper function to get the order params
 * @param quote - The quote object
 * @returns The order params
 */
import { encodeFunctionData } from 'viem';
import { abi } from '../index.js';
import { FunctionName } from '../enums/index.js';
import { toBytes32 } from '../utils/toBytes32.util.js';
import { type Quote } from '../@types/quote.js';

/**
 * A helper function to encode the order data
 * @param quote - The quote provided by the Mach API
 * @returns The encoded order data
 */
export const encodeOrderData = (quote: Quote) => {
  const {
    order_direction,
    order_funding,
    order_expiration,
    target_address,
    filler_address,
  } = quote.order_data;

  return encodeFunctionData({
    abi: abi.orderBook,
    functionName: FunctionName.PlaceOrder,
    args: [
      [
        order_direction.src_token_address, // Keep as regular address
        toBytes32(order_direction.dst_token_address), // Convert to bytes32
        order_direction.dst_lzc,
      ],
      [
        BigInt(order_funding.src_amount_in),
        BigInt(order_funding.dst_amount_out),
        order_funding.bond_fee,
        order_funding.bond_token_address, // Keep as regular address
        BigInt(order_funding.bond_amount),
      ],
      [
        order_expiration.timestamp,
        order_expiration.challenge_offset,
        order_expiration.challenge_window,
      ],
      toBytes32(target_address), // Convert target_address to bytes32
      filler_address,
    ],
  });
};
