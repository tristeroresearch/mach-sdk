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
import { type Hex, type Chain, type TransactionRequest, type WalletClient } from 'viem';

/**
 * A helper function to sign an approval transaction
 * @param data - The data to send with the transaction
 * @param chainName - The chain to send the transaction to
 * @param tokenContractAddress - The address of the token contract
 * @param privateKey - The private key of the account to sign the transaction
 * @param gasData - The gas data to use for the transaction
 * @returns The signed transaction
 * @description This helper function signs an approval transaction for a specified token contract and chain using the provided private key and data.
 */
export const signApprovalTransaction = async (
  data,
  chainName,
  tokenContractAddress,
  privateKey?: Hex,
  gasData?: GasData
) => {
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const contractAddress = tokenContractAddress;
  const { publicClient, walletClient, account } = await createWalletClients(chainName, privateKey);

  // Check if the account address is zero, if so throw an error
  if (account.address === EVM_ZERO_ADDRESS) throw new Error(ErrorMessage.AccountAddressZero);

  // Get gas for the transaction
  //Behavior is subject to config.getGasRecommendationOverride()
  const gas = await getGasForTransaction(chainName, gasData);

  // Get nonce for the account
  const nonce = await publicClient.getTransactionCount({
    address: account.address,
  });

  // Get Viem chain object from chain name
  const chain = await getChainFromName(chainName);

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
