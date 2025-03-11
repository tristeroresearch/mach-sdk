/**
 * @fileoverview This file contains the helper functions to approve a token and submit an order.
 */

import { encodeOrderData } from './encodeOrderData.js';
import { signTransaction } from './signTransaction.helper.js';
import { createWalletClients } from '../utils/createWalletClients.util.js';
import { approveToken } from './approveToken.helper.js';
import { ErrorMessage } from '../errors/constants.js';
import { GasData } from '../@types/gasData.js';
import { attemptToLoadPrivateKeyFromEnv } from '../utils/attemptToLoadPrivateKeyFromEnv.util.js';
import { type Hex } from 'viem';
import { type Quote } from '../@types/quote';

/**
 * A helper function to submit an order by calling approveToken, encoding order data, signing the transaction, and sending it to the blockchain.
 * @param quote - The quote to submit the order for
 * @param key - The private key of the account to sign the transaction
 * @returns The receipt of the order transaction
 * @description This helper function submits an order by calling approveToken, encoding order data, signing the transaction, and sending it to the blockchain.
 */
export const submitOrder = async (
  quote: Quote,
  privateKey?: Hex,
  gasData?: GasData,
) => {
  try {
    //Throws an error if the private key is not found in the environment
    if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

    // Create wallet clients
    const { publicClient } = createWalletClients(
      quote.src_chain as Hex,
      privateKey,
    );

    // Approve the token
    const approvalHash = await approveToken(quote, privateKey, gasData);

    // Then place the order
    const orderData = encodeOrderData(quote);
    const orderSignedHash = await signTransaction(
      orderData,
      quote.src_chain as Hex,
      privateKey,
      gasData,
    );

    // Send the order transaction
    const orderTx = { serializedTransaction: orderSignedHash };
    const orderHash = await publicClient.sendRawTransaction(orderTx);

    // Wait for the transaction to be mined
    const receipt = await publicClient.waitForTransactionReceipt({
      hash: orderHash,
    });

    return receipt;
  } catch (error) {
    if (error.message.includes('InvalidInputRpcError')) {
      throw new Error(ErrorMessage.TransactionUnderpriced);
    } else throw error;
  }
};
