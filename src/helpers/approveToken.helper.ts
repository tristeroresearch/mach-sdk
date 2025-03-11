import { signApprovalTransaction } from '../helpers/index.js';
import {
  attemptToLoadPrivateKeyFromEnv,
  createWalletClients,
} from '../utils/index.js';

import { readContract } from 'viem/actions';
import { abi } from '../index.js';
import { FunctionName, SpecialAddress } from '../enums/index.js';
import { MAX_UINT256 } from '../constants/index.js';
import { ErrorMessage } from '../errors/constants.js';
import { encodeFunctionData, parseUnits } from 'viem';
import { type Address, type Hex } from 'viem';
import { type GasData } from '../@types/gasData';
import { type Quote } from '../@types/quote';

/**
 * A helper function to ensure a token is approved for transfer by checking allowance and sending an approval transaction if necessary.
 * @param quote - The quote to approve the token for
 * @param key - The private key of the account to sign the transaction
 * @returns The hash of the approval transaction
 * @description This helper function ensures a token is approved for transfer by checking allowance and sending an approval transaction if necessary.
 */
export const approveToken = async (
  quote: Quote,
  privateKey?: Hex,
  gasData?: GasData,
): Promise<Hex> => {
  try {
    //Throws an error if the private key is not found in the environment
    if (!privateKey) privateKey = attemptToLoadPrivateKeyFromEnv(privateKey);

    // Create wallet clients
    const { publicClient, walletClient } = createWalletClients(
      quote.src_chain as Hex,
      privateKey,
    );
    const address = walletClient.account.address;

    // Add a check to ensure the address is not zero
    if (address === SpecialAddress.Zero)
      throw new Error(ErrorMessage.WalletAddressZero);

    // Get decimals of token
    const decimals = await readContract(publicClient, {
      address: quote.src_asset_address as Address,
      abi: abi.erc20,
      functionName: FunctionName.Decimals,
    });

    // Check existing allowance
    const allowance = await readContract(publicClient, {
      address: quote.src_asset_address as Address,
      abi: abi.erc20,
      functionName: FunctionName.Allowance,
      args: [address, quote.order_data.contract_address as Address],
    });

    // If allowance is already sufficient, skip approval
    // Return a string-typed 0 hash if allowance is sufficient
    if ((allowance as bigint) >= parseUnits(quote.src_amount, Number(decimals)))
      return '0x0';

    // Prepare the approval transaction data (approve maximum amount)
    // TODO: Support approving less than maxUint256
    const approvalTxData: Hex = encodeFunctionData({
      abi: abi.erc20,
      functionName: FunctionName.Approve,
      args: [quote.order_data.contract_address as Address, MAX_UINT256],
    });

    // Sign the approval transaction
    const approvalSignedHash = await signApprovalTransaction(
      approvalTxData,
      quote.src_chain,
      quote.src_asset_address as Address,
      privateKey,
      gasData,
    );

    // Send the approval transaction
    const approvalTx = { serializedTransaction: approvalSignedHash };
    const approvalHash = await publicClient.sendRawTransaction(approvalTx);

    // Wait for the transaction to be mined
    await publicClient.waitForTransactionReceipt({ hash: approvalHash });

    return approvalHash;
  } catch (error) {
    console.error('Error during token approval:', error);
    throw error;
  }
};
