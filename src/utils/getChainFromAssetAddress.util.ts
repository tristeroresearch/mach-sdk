/**
 * This helper function determines the blockchain network associated with a given asset address by checking against available tokens.
 * Will only work for tokens that are available in the Mach Exchange API.
 * @param assetAddress - The address of the asset to get the chain from
 * @returns The chain name associated with the asset address
 */
import { config } from '../config';
import { getChainNameFromId } from '../configs/chainInfo';

export const getChainFromAssetAddress = async (assetAddress: string) => {
  //get chainId from assetAddress
  //get network name from chainId
  const tokens = (await config).get().availableTokens;
  let chainId = null;
  for (const token of Object.values(tokens)) {
    if (token.address === assetAddress) {
      chainId = token.chainId;
      break;
    }
  }
  if (chainId) return getChainNameFromId(chainId);
  else return null;
};
