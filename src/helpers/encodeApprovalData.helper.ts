import { Address, encodeFunctionData } from 'viem';
import { abi } from '../contracts/index.js';
import { FunctionName } from '../enums/index.js';

/**
 * A helper function to approve token spending for the contract
 * @param tokenAddress - The address of the token to approve
 * @param spenderAddress - The address of the contract to approve
 * @param amount - The amount to approve (in wei)
 * @returns The encoded approval data
 */
export const encodeApprovalData = (
  tokenAddress: Address,
  spenderAddress: Address,
  amount: bigint,
) => {
  return {
    to: tokenAddress,
    data: encodeFunctionData({
      abi: abi.erc20,
      functionName: FunctionName.Approve,
      args: [spenderAddress, amount],
    }),
  };
};
