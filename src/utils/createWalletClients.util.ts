/**
 * This helper function initializes wallet and public clients for a
 * specified blockchain network using a provided private key.
 * @param privateKey - The private key of the account
 * @param chain - The chain to create the wallet client for
 * @returns The wallet client
 */
import { privateKeyToAccount } from 'viem/accounts';
import {
  createWalletClient,
  http,
  createPublicClient,
  type WalletClient,
  type Account,
  type Hex,
  type Chain,
} from 'viem';
import { getChainFromName } from './getChainFromName.util';
import { attemptToLoadPrivateKeyFromEnv } from './attemptToLoadPrivateKeyFromEnv.util';

export const createWalletClients = (
  chain: string,
  privateKey?: Hex,
): { publicClient: any; walletClient: WalletClient; account: Account } => {
  //Throws an error if the private key is not found in the environment
  if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

  const selectedChain: Chain = getChainFromName(chain);

  const publicClient = createPublicClient({
    chain: selectedChain,
    transport: http(),
  });
  const cleanKey = privateKey?.replace('0x', '').padStart(64, '0');
  const account: Account = privateKeyToAccount(`0x${cleanKey}`);
  const walletClient: WalletClient = createWalletClient({
    account,
    chain: selectedChain,
    transport: http(),
  });
  return { publicClient, walletClient, account };
};
