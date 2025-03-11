import { arbitrum, optimism, mainnet, polygon, celo, base } from 'viem/chains';
import { type Chain } from 'viem';

export const getChainFromName = (chain: string) => {
  let selectedChain: Chain;
  switch (chain) {
    case 'arbitrum':
      selectedChain = arbitrum;
      break;
    case 'optimism':
      selectedChain = optimism;
      break;
    case 'ethereum':
      selectedChain = mainnet;
      break;
    case 'polygon':
      selectedChain = polygon;
      break;
    case 'celo':
      selectedChain = celo;
      break;
    case 'base':
      selectedChain = base;
      break;
    default:
      selectedChain = arbitrum;
  }
  return selectedChain;
};
