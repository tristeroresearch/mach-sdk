/**
 * @fileOverview This file contains a function that interacts with the Mach Exchange API to retrieve transaction history for a specified wallet.
 * @function getTransactionHistory - Retrieves the transaction history for a given wallet address, ensuring the wallet parameter is provided.
 */

import { machExchangeApi } from '../libs/axios';
import { config } from '../config.js';
import { SDKError } from '../errors/SDKError.js';
import { ValidationError } from '../errors/errors.js';
import { ErrorMessage } from '../errors/constants.js';

export const getTransactionHistory = async ({
  wallet,
}: {
  wallet: string;
}): Promise<any[]> => {
  if (!wallet)
    throw new SDKError(
      new ValidationError(ErrorMessage.WalletParameterMissing),
    );

  const _config = (await config).get();
  const url = new URL(`${_config.apiUrl}/orders}`);
  url.searchParams.append('wallet', wallet);
  return (await machExchangeApi.get(url.toString())).data;
};
