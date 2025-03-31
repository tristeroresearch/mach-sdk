/**
 * This helper function initializes wallet and public clients for a
 * specified blockchain network using a provided private key.
 * @param chain - The chain to create the wallet client for
 * @param privateKey - The private key of the account (optional)
 * @returns The wallet client
 */
import {
  createPublicClient,
  createWalletClient,
  http,
  type Chain,
  type PublicClient,
  type WalletClient,
  type Account,
  type Hex,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { getChainFromName } from './getChainFromName.util';
import { attemptToLoadPrivateKeyFromEnv } from './attemptToLoadPrivateKeyFromEnv.util';
import { ErrorMessage } from '../errors/constants';

export const createWalletClients = async (
  chain: string,
  privateKey?: Hex
): Promise<{
  publicClient: any;
  walletClient: WalletClient;
  account: Account;
}> => {
  try {
    // Throws an error if the private key is not found in the environment
    if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

    const selectedChain: Chain = await getChainFromName(chain);

    // Clean and format the private key to ensure it's properly formatted
    const cleanKey = privateKey?.replace('0x', '').padStart(64, '0');
    const account = privateKeyToAccount(`0x${cleanKey}` as `0x${string}`);

    const publicClient = createPublicClient({
      chain: selectedChain,
      transport: http(),
    });

    const walletClient = createWalletClient({
      account,
      chain: selectedChain,
      transport: http(),
    });

    return {
      publicClient,
      walletClient,
      account,
    };
  } catch (error) {
    throw new Error(ErrorMessage.FailedToCreateWalletClients);
  }
};
