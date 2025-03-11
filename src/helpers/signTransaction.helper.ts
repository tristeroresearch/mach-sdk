import { createWalletClients } from '../utils/createWalletClients.util';
import { getOrderBook } from './getOrderBook.helper';
import { getChainFromName } from '../utils/getChainFromName.util';
import { config } from '../config';
import { TransactionType } from '../enums';
import { getGasForTransaction } from '../utils/getGasForTransaction.util';
import { attemptToLoadPrivateKeyFromEnv } from '../utils/attemptToLoadPrivateKeyFromEnv.util';

import { type GasData } from '../@types/gasData';
import { type Hex } from 'viem';

/**
 * A helper function to sign a transaction
 * @param contractAddress - The address of the contract to send the transaction to
 * @param key - The private key of the account to sign the transaction
 * @param data - The data to send with the transaction
 * @param chainName - The chain to send the transaction to
 * @param gasData - The gas data to use for the transaction
 * @returns The signed transaction
 * @description This helper function signs a transaction for a specified contract and chain using the provided private key and data.
 */
export const signTransaction = async (
  data,
  chainName,
  privateKey?: Hex,
  gasData?: GasData,
) => {
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);
  const contractAddress = getOrderBook(chainName);
  const { publicClient, walletClient, account } = createWalletClients(
    chainName,
    privateKey,
  );

  const chain = getChainFromName(chainName);

  //Depends on the passedgasData
  //If it is provided, it will use it, otherwise it will fetch the gas recommendation from the API
  const gas = await getGasForTransaction(chainName, gasData);

  const nonce = await publicClient.getTransactionCount({
    address: account.address,
  });

  const _config = await (await config).getConfig();

  const signedHash = await walletClient.signTransaction({
    to: contractAddress,
    chain,
    data,
    value: 0n,
    nonce,
    account,
    type: TransactionType.EIP1559,
    maxFeePerGas: gas.gas_price,
    maxPriorityFeePerGas: _config.priorityFeePerGas,
    gas: gas.gas_limit,
  });

  return signedHash;
};
