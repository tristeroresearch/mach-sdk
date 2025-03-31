import { createWalletClients } from './createWalletClients.util';
import { getChainFromAssetAddress } from './getChainFromAssetAddress.util';
import { abi } from '../contracts/index.js';
import { readContract } from 'viem/actions';
import { ErrorMessage } from '../errors/constants';
import { attemptToLoadPrivateKeyFromEnv } from './attemptToLoadPrivateKeyFromEnv.util';
import { type Asset } from '../@types/asset';
import { type Hex, type Address, type GetContractReturnType } from 'viem';

/**
 * A helper function to retrieve the balance of a specified token for a wallet using the private key from environment variables.
 * @param asset - The asset to get the balance of
 * @returns The balance of the specified token
 * @description This helper function retrieves the balance of a specified token for a wallet using the private key from environment variables.
 */
export const tokenBalance = async (asset: Asset, privateKey?: Hex) => {
  //Throws an error if the private key is not found in the environment
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const chain = await getChainFromAssetAddress(asset.address);
  const clients = await createWalletClients(chain, privateKey);
  const publicClient = clients.publicClient;
  const account = clients.account;

  const balance = await readContract(publicClient as any, {
    address: asset.address as Address,
    abi: abi.erc20,
    functionName: 'balanceOf',
    args: [account.address],
  });

  return balance;
};

/**
 * A type guard function to check if a contract has a read function
 * @param contract - The contract to check
 * @returns True if the contract has a read function, false otherwise
 * @description This type guard function checks if a contract has a read function.
 */
function hasReadFunction<
  Abi extends readonly unknown[],
  Client extends { public?: never; wallet: never } | { public: never; wallet?: never },
  Address extends Hex,
>(
  contract: GetContractReturnType<Abi, Client, Address>
): contract is GetContractReturnType<Abi, Client, Address> & { read: object } {
  return (contract as any).read !== undefined;
}
