import { arbitrum, optimism, mainnet, polygon, celo, base, sepolia, monadTestnet } from 'viem/chains';
import { type Chain } from 'viem';
import { config } from '../config';
import { isTestnetChain, getChainId } from '../configs/chainInfo';
import { ErrorMessage } from '../errors/constants';

export const getChainFromName = async (chainName: string) => {
  let selectedChain: Chain;
  const chainId = getChainId(chainName);
  const chainIsTestnet = isTestnetChain(chainId);
  const configTestnetMode = (await config).getTestnetMode();

  if (chainIsTestnet !== configTestnetMode) {
    throw new Error(ErrorMessage.InvalidChainForMode);
  }

  switch (chainName.toLowerCase()) {
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
    case 'sepolia':
      selectedChain = sepolia;
      break;
    case 'monadtestnet':
      selectedChain = monadTestnet;
      break;
    default:
      throw new Error(`Chain ${chainName} not supported`);
  }

  return selectedChain;
};
