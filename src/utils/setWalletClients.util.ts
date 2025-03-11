/**
 * A helper function to set the wallet clients for the SDK
 * @param key - The private key of the account
 * @param srcChain - The chain to create the wallet client for
 * @description This helper function configures wallet clients for the SDK using a provided private key and source chain.
 */

import { config } from '../config';
import { ErrorMessage } from '../errors/constants';

export const setWalletClients = async (
  key: `0x${string}` | undefined,
  srcChain: string,
) => {
  if (!key) throw new Error(ErrorMessage.PrivateKeyNotPassed);
  (await config).setWalletClients(key, srcChain);
};
