/**
 * @fileOverview This file contains functions that interact with the Mach Exchange API for order-related operations.
 * @function marketMake - Sends order data to the API and processes the response to determine order status.
 * @function apiNewPostReceiveCctpMessage - Posts a receive CCTP message to the API and returns the response.
 * @function apiGetOrderETA - Retrieves the estimated time of arrival (ETA) for an order.
 * @function apiGetOrderHistory - Fetches the order history for a given wallet address.
 */

/**
 * API function to send order data to the Mach Exchange backend to be processed and finalized
 * @param orderData - The order data
 * @param referralCode - The referral code
 * @param referrer - The referrer
 * @returns The response from the order data api
 * @todo Error status codes can't be caught the way that hey are now -- non-2xx status codes are instantly throwing errors from the axios call and are ending up in the catch block
 */
import { ResultCode, OrderResponseMessage } from '../enums';
import { ErrorMessage } from '../errors/constants';
import { machExchangeApi } from '../libs/axios';
import { type OrderItemResponse } from '../@types/orderResponse';

export const marketMake = async (
  orderData: any,
  referralCode?: string,
  referrer?: string,
) => {
  if (orderData === undefined) {
    return {
      message: OrderResponseMessage.ErrorDecodingOrderData,
      status: ResultCode.Failure,
    };
  }
  const payload: any = {
    chain: orderData.sellChain,
    place_taker_tx: orderData.transactionHash,
  };

  if (referralCode) payload.referral_code = referralCode;
  if (referrer) payload.referrer = referrer;

  try {
    const response = await machExchangeApi.post('/v1/orders', payload);
    switch (response.status) {
      case 200:
        return {
          message: OrderResponseMessage.OrderSent,
          status: ResultCode.Pending,
          eta: response.data.eta,
          id: response.data.id,
        };
      case 202:
        return {
          message: OrderResponseMessage.OrderPending,
          status: ResultCode.Pending,
          eta: response.data.eta,
        };
      case 400:
        if (
          response.data?.detail?.includes(
            ErrorMessage.NoOrderPlacedLogsFoundInTxReceipt,
          )
        ) {
          return {
            message: OrderResponseMessage.OrderNotFound,
            status: ResultCode.Failure,
            errorobj: {
              detail: ErrorMessage.NoOrderFoundInTxReceipt,
            },
          };
        } else {
          return {
            message: OrderResponseMessage.OrderNotFilled,
            status: ResultCode.Failure,
            errorobj: response.data,
          };
        }
      case 422:
        return {
          message: OrderResponseMessage.PayloadError,
          status: ResultCode.Failure,
          errorobj: response.data,
        };
      default:
        return {
          message: OrderResponseMessage.UnexpectedError,
          status: ResultCode.Failure,
          errorobj: response.data,
        };
    }
  } catch (error) {
    return {
      message: OrderResponseMessage.UnspecifiedError,
      status: ResultCode.Failure,
      errorobj: error,
    };
  }
};

/**
 * API function to post a receive CCTP message
 * @param srcChain - The source chain
 * @param burnTx - The burn transaction
 * @returns The response from the post receive CCTP message api
 */
export const apiNewPostReceiveCctpMessage = async (
  srcChain: string,
  burnTx: string,
) => {
  try {
    const response = await machExchangeApi.post('/v1/orders/cctp', {
      chain: srcChain.toLowerCase(),
      burn_tx: burnTx,
    });
    if (response.status == 200 || response.status === 202) {
      return {
        message: OrderResponseMessage.OrderPending,
        status: ResultCode.Pending,
        eta: response.data.eta,
        id: response.data.id,
      };
    }
  } catch (error) {
    return {
      message: OrderResponseMessage.OrderNotFilled,
      error: error,
      status: ResultCode.Failure,
    };
  }
};

/**
 * API function to get the ETA for an order
 * @param srcChainName - The source chain name
 * @param dstChainName - The destination chain name
 * @param srcAsset - The source asset
 * @param dstAsset - The destination asset
 * @param amount - The amount
 * @returns The ETA for the order
 */
export const apiGetOrderETA = async (
  srcChainName: string,
  dstChainName: string,
  srcAsset: string,
  dstAsset: string,
  amount: bigint,
) => {
  const params = {
    src_chain_name: srcChainName,
    dst_chain_name: dstChainName,
    src_asset: srcAsset,
    dest_asset: dstAsset,
    amount: amount,
  };

  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const { data }: { data: any } = await machExchangeApi.get(
    `/orderETA?${queryString}`,
  );
  // TODO: Add proper types to data instead of any!

  return data;
};

export const apiGetOrderHistory = async (address: string) => {
  const { data }: { data: OrderItemResponse[] } = await machExchangeApi.get(
    `/v1/orders?wallet=${address}`,
  );
  return data;
};
