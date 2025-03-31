/**
 * @fileoverview This file contains the helper functions to approve a token and submit an order.
 */

import { approveToken } from './approveToken.helper';
import { signTransaction } from './signTransaction.helper';
import { encodeOrderData } from './encodeOrderData';
import { createWalletClients } from '../utils/createWalletClients.util.js';
import { GasData } from '../@types/gasData.js';
import { attemptToLoadPrivateKeyFromEnv } from '../utils/attemptToLoadPrivateKeyFromEnv.util.js';
import { type Hex, type PublicClient } from 'viem';
import { type Quote } from '../@types/quote';
import { ErrorMessage } from '../errors/constants';

/**
 * A helper function to submit an order
 * @param quote - The quote to submit
 * @param privateKey - The private key of the account to sign the transaction
 * @param gasData - The gas data to use for the transaction
 * @returns The transaction receipt
 * @description This helper function submits an order by calling approveToken, encoding order data, signing the transaction, and sending it to the blockchain.
 */
export const submitOrder = async (quote: Quote, privateKey?: Hex, gasData?: GasData) => {
  try {
    //Throws an error if the private key is not found in the environment
    if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

    // Create wallet clients
    const clients = await createWalletClients(quote.src_chain as Hex, privateKey);
    const publicClient = clients.publicClient as PublicClient;

    // Approve the token
    const approvalHash = await approveToken(quote, privateKey, gasData);

    // Then place the order
    const orderData = encodeOrderData(quote);
    const orderSignedHash = await signTransaction(orderData, quote.src_chain as Hex, privateKey, gasData);

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
