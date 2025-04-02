import {
  ARBITRUM_CONTRACTS,
  AVALANCHE_CONTRACTS,
  CELO_CONTRACTS,
  ETHEREUM_CONTRACTS,
  BASE_CONTRACTS,
  OPTIMISM_CONTRACTS,
  POLYGON_CONTRACTS,
  MONADTESTNET_CONTRACTS,
  SEPOLIA_CONTRACTS,
} from '../constants/index.js';

// This helper function retrieves the order book contract address for a specified blockchain network.

/**
 * A helper function to get the order book address
 * @param network - The network to get the order book address for
 * @returns The order book address
 */
export const getOrderBook = (network: string) => {
  switch (network) {
    case 'ethereum':
      return ETHEREUM_CONTRACTS['order_book'];
    case 'optimism':
      return OPTIMISM_CONTRACTS['order_book'];
    case 'arbitrum':
      return ARBITRUM_CONTRACTS['order_book'];
    case 'avalanche':
      return AVALANCHE_CONTRACTS['order_book'];
    case 'polygon':
      return POLYGON_CONTRACTS['order_book'];
    case 'celo':
      return CELO_CONTRACTS['order_book'];
    case 'base':
      return BASE_CONTRACTS['order_book'];
    case 'monadtestnet':
      return MONADTESTNET_CONTRACTS['order_book'];
    case 'sepolia':
      return SEPOLIA_CONTRACTS['order_book'];
  }
  return null;
};
