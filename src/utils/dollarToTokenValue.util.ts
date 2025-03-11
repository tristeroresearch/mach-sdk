/**
 * @fileOverview This helper function converts a dollar value to the smallest unit of a token using the decimal precision of the token.
 * @param dollarValue - The dollar value to convert
 * @param token - The token to convert to
 * @returns The smallest unit of the token
 */

//TODO: Use the token decimals from the token contract
import { config } from '../config.js';
import { type Asset } from '../@types/asset';
import { type Hex } from 'viem';
import { ValidationError, UnknownError } from '../errors/errors.js';
import { ErrorMessage, MachErrorCode } from '../errors/constants.js';

export const dollarToTokenValue = async (
  dollarValue: number,
  token: Asset | Hex,
): Promise<string> => {
  try {
    const tokenAddress = typeof token === 'string' ? token : token.address;
    // Access the config directly to get the available tokens
    const { availableTokens } = (await config).get();
    // Iterate through the available tokens to find the token
    for (const availableToken of Object.values(availableTokens)) {
      if (availableToken.address === tokenAddress) {
        const decimals = availableToken.decimals;

        try {
          // Convert dollar value to cents (multiply by 100) to avoid decimal issues with BigInt
          // Use Math.round to handle floating point precision issues
          const dollarInCents = Math.round(dollarValue * 100);

          // Convert to token decimals
          const scalingFactor = BigInt(10) ** BigInt(decimals - 2);

          return (BigInt(dollarInCents) * scalingFactor).toString();
        } catch (error) {
          throw new UnknownError(
            `Failed to convert dollar value to token: ${error.message}`,
            error instanceof Error ? error : undefined,
          );
        }
      }
    }

    throw new ValidationError(
      `Token with address ${tokenAddress} not found in available tokens`,
    );
  } catch (error) {
    if (error instanceof ValidationError || error instanceof UnknownError) {
      throw error; // Re-throw our custom errors
    }
    throw new UnknownError(
      `Error in dollarToTokenValue: ${error.message}`,
      error instanceof Error ? error : undefined,
    );
  }
};
