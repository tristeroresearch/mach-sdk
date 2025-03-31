import {
  getChainFromName,
  getGasForTransaction,
  attemptToLoadPrivateKeyFromEnv,
  createWalletClients,
} from '../utils/index.js';
import { ErrorMessage } from '../errors/constants';
import { EVM_ZERO_ADDRESS } from '../constants';
import { TransactionType } from '../enums';
import { config } from '../config';
import { type GasData } from '../@types/gasData';
import { type Hex, type PublicClient } from 'viem';
import { getOrderBook } from './getOrderBook.helper';

/**
 * A helper function to sign a transaction
 * @param data - The data to send with the transaction
 * @param chainName - The chain to send the transaction to
 * @param privateKey - The private key of the account to sign the transaction
 * @param gasData - The gas data to use for the transaction
 * @returns The signed transaction
 * @description This helper function signs a transaction for a specified contract and chain using the provided private key and data.
 */
export const signTransaction = async (transactionData: Hex, chainName, privateKey?: Hex, gasData?: GasData) => {
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const clients = await createWalletClients(chainName, privateKey);
  const publicClient = clients.publicClient as PublicClient;
  const walletClient = clients.walletClient;
  const account = clients.account;

  // Check if the account address is zero, if so throw an error
  if (account.address === EVM_ZERO_ADDRESS) throw new Error(ErrorMessage.AccountAddressZero);

  // Get gas for the transaction
  //Behavior is subject to config.getGasRecommendationOverride()
  const gasEstimate = await getGasForTransaction(chainName, gasData);

  // Get nonce for the account
  const nonce = await publicClient.getTransactionCount({
    address: account.address,
  });

  // Get Viem chain object from chain name
  const chain = await getChainFromName(chainName);

  const _config = await (await config).getConfig();

  //Build transaction parameters
  // Get the order book contract address
  const orderBookContractAddress = await getOrderBook(chainName);
  const to = orderBookContractAddress;
  const data = transactionData;
  const value = 0n;

  //Get transaction type
  const transactionType = TransactionType.EIP1559;
  const type = transactionType;

  //Get gas parameters
  const maxFeePerGas = gasEstimate.gas_price;
  const maxPriorityFeePerGas = _config.priorityFeePerGas;
  const gas = gasEstimate.gas_limit;

  const signedHash = await walletClient.signTransaction({
    to,
    chain,
    data,
    value,
    nonce,
    account,
    type,
    maxFeePerGas,
    maxPriorityFeePerGas,
    gas,
  });

  return signedHash;
};
