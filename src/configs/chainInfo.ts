/**
 * @fileoverview This file contains the chain information for the Mach Protocol.
 */
import { SOLANA_CHAIN_ID } from '../chains/solana/utils';

// How to display the chain names on the users' screens
export const chainNames = {
  ethereum: 'Ethereum',
  optimism: 'Optimism',
  arbitrum: 'Arbitrum',
  celo: 'Celo',
  base: 'Base',
  polygon: 'Polygon',
  avalanche: 'Avalanche',
  sepolia: 'Sepolia',
  monadtestnet: 'Monad Testnet',
} as const;

// The EVM chain IDs of the networks that the Mach Protocol supports
export const chainIds = {
  ethereum: 1,
  optimism: 10,
  arbitrum: 42161,
  celo: 42220,
  base: 8453,
  polygon: 137,
  avalanche: 43114,
  sepolia: 11155111,
  monadtestnet: 10143,
} as const;

/**
 * A map of EVM chain IDs to chain names
 */
export const chainNamesFromIds: { [key: number]: string } = Object.fromEntries(
  Object.entries(chainIds).map(([key, value]) => [value, key])
);

/**
 * A map of EVM chain IDs to LayerZero v1 chain IDs
 */
export const lzV1ChainIds: Readonly<Record<number, number>> = {
  42161: 110, // arbitrum
  43114: 106, // avalanche
  42220: -1, // celo
  8453: -1, // base
  81457: 243, // blast
  56: 102, // bsc
  1: 101, // ethereum
  5000: -1, // mantle
  34443: -1, // mode
  204: -1, // opbnb
  10: 111, // optimism
  137: 109, // polygon
  534352: -1, // scroll
  [SOLANA_CHAIN_ID]: -1, // solana
  5: 10121, // goerli
  97: 10102, // bsc_testnet
  420: 10132, // OP goerli
  43113: 10106, // Avalanche Fuji
  80001: 10143, // Polygon Mumbai
  421613: 10143, // Arbitrum Goerli
};

// These correspond to the native gas token of the networks
export const nativeTokens = {
  ethereum: 'ETH',
  optimism: 'ETH',
  arbitrum: 'ETH',
  celo: 'CELO',
  base: 'ETH',
  polygon: 'MATIC',
  avalanche: 'AVAX',
  sepolia: 'ETH',
  monadtestnet: 'MON',
} as const;

export const getChainName = (key: string): string => chainNames[key as keyof typeof chainNames] || key;

export const getChainNameFromId = (id: number): string => chainNamesFromIds[id] || 'Unknown Chain';

export const getGasToken = (key: string): string => nativeTokens[key as keyof typeof nativeTokens] || key;

export const getChainId = (key: string): number => chainIds[key as keyof typeof chainIds] || 0;

// Testnet chain IDs
export const TESTNET_CHAIN_IDS = [11155111, 10143] as const; // Sepolia and Monad testnet

// Mainnet chain IDs
export const MAINNET_CHAIN_IDS = [1, 10, 42161, 42220, 8453, 137, 43114] as const;

/**
 * Checks if a chain ID is a testnet chain ID
 * @param chainId - The chain ID to check
 * @returns boolean indicating if the chain ID is a testnet chain ID
 */
export const isTestnetChain = (chainId: number): boolean => {
  return TESTNET_CHAIN_IDS.includes(chainId as (typeof TESTNET_CHAIN_IDS)[number]);
};

/**
 * Checks if a chain ID is a mainnet chain ID
 * @param chainId - The chain ID to check
 * @returns boolean indicating if the chain ID is a mainnet chain ID
 */
export const isMainnetChain = (chainId: number): boolean => {
  return MAINNET_CHAIN_IDS.includes(chainId as (typeof MAINNET_CHAIN_IDS)[number]);
};

/**
 * Validates if a chain ID matches the expected network mode (testnet/mainnet)
 * @param chainId - The chain ID to validate
 * @param isTestnet - Whether we're in testnet mode
 * @returns boolean indicating if the chain is valid for the current mode
 */
export const validateChainForMode = (chainId: number, isTestnet: boolean): boolean => {
  return isTestnet ? isTestnetChain(chainId) : isMainnetChain(chainId);
};
