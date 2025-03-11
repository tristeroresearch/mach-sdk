/**
 * @fileoverview This file contains the chain information for the Mach Protocol.
 */
import { SOLANA_CHAIN_ID } from '../chains/solana/utils';

// How to display the chain names on the users' screens
export const chainNames: { [key: string]: string } = {
  arbitrum: 'Arbitrum',
  avalanche: 'Avalanche',
  celo: 'Celo',
  base: 'Base',
  blast: 'Blast',
  bsc: 'BSC',
  ethereum: 'Ethereum',
  mantle: 'Mantle',
  mode: 'Mode',
  opbnb: 'opBNB',
  optimism: 'Optimism',
  polygon: 'Polygon',
  scroll: 'Scroll',
  solana: 'Solana',
};

// The EVM chain IDs of the networks that the Mach Protocol supports
export const chainIds: { [key: string]: number } = {
  arbitrum: 42161,
  avalanche: 43114,
  celo: 42220,
  base: 8453,
  blast: 81457,
  bsc: 56,
  ethereum: 1,
  mantle: 5000,
  mode: 34443,
  opbnb: 204,
  optimism: 10,
  polygon: 137,
  scroll: 534352,
  solana: SOLANA_CHAIN_ID,
};

/**
 * A map of EVM chain IDs to chain names
 */
export const chainNamesFromIds: { [key: number]: string } = Object.fromEntries(
  Object.entries(chainIds).map(([key, value]) => [value, key]),
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
export const nativeTokens: { [key: string]: string } = {
  arbitrum: 'ETH',
  avalanche: 'AVAX',
  celo: 'CELO',
  base: 'ETH',
  blast: 'ETH',
  bsc: 'BNB',
  ethereum: 'ETH',
  mantle: 'MNT',
  mode: 'ETH',
  opbnb: 'BNB',
  optimism: 'ETH',
  polygon: 'MATIC',
  scroll: 'ETH',
  solana: 'SOL',
};

export const getChainName = (key: string): string =>
  chainNames[key] || 'Unknown Chain';

export const getChainNameFromId = (id: number): string =>
  chainNamesFromIds[id] || 'Unknown Chain';

export const getGasToken = (key: string): string =>
  nativeTokens[key] || 'Unknown';

export const getChainId = (key: string): number => chainIds[key] || -1;
