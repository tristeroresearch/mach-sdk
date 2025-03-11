import { Constants } from '../constants/index.js';
import { networks } from '../constants/networks.js';

/**
 * A helper function to find the lz id from an asset
 * @param dstAsset - The asset to find the lz id for
 * @returns The lz id
 */
export const findLayerZeroChainIdFromAsset = (dstAsset: string) => {
  //loop through chains to find the chain with the asset
  let lzChain;
  for (const chain in Constants.tokens) {
    //skip convenience chain names that don't have the full chain name in them
    if (!chain.includes('ASSETS')) continue;
    const assets = Constants.tokens[chain as keyof typeof Constants.tokens];
    for (const asset in assets)
      if (assets[asset].address === dstAsset)
        //chain is of the form "ARBITRUM_ASSETS"
        lzChain = chain.split('_')[0].toLowerCase();
  }

  if (!lzChain) return null;

  for (const chain in networks)
    if (chain === lzChain) return networks[chain].lz_id;

  return null;
};
