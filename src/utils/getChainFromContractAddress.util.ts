/**
 * @fileoverview This file contains the helper function to determine the blockchain network associated with a given contract address by checking against known contract addresses.
 */
import { type Hex } from 'viem';
import {
  ETHEREUM_CONTRACTS,
  OPTIMISM_CONTRACTS,
  ARBITRUM_CONTRACTS,
  AVALANCHE_CONTRACTS,
  POLYGON_CONTRACTS,
  BASE_CONTRACTS,
  CELO_CONTRACTS,
  MONADTESTNET_CONTRACTS,
  SEPOLIA_CONTRACTS,
} from '../constants/contracts';

const CONTRACTS_MAP = {
  Ethereum: ETHEREUM_CONTRACTS,
  Optimism: OPTIMISM_CONTRACTS,
  Arbitrum: ARBITRUM_CONTRACTS,
  Avalanche: AVALANCHE_CONTRACTS,
  Polygon: POLYGON_CONTRACTS,
  Base: BASE_CONTRACTS,
  Celo: CELO_CONTRACTS,
  MonadTestnet: MONADTESTNET_CONTRACTS,
  Sepolia: SEPOLIA_CONTRACTS,
};

/**
 * A helper function to determine the blockchain network associated with a given contract address by checking against known contract addresses.
 * @param contractAddress - The address of the contract to check
 * @returns The name of the blockchain network or null if no match is found
 * @description This helper function determines the blockchain network associated with a given contract address by checking against known contract addresses.
 */
export const getChainFromContractAddress = (contractAddress: Hex): string | null => {
  const normalizedAddress = contractAddress.toLowerCase();
  for (const [chainName, contracts] of Object.entries(CONTRACTS_MAP))
    if (
      Object.values(contracts)
        .map((addr) => addr.toLowerCase())
        .includes(normalizedAddress)
    )
      return chainName.toLowerCase();
  return null;
};
