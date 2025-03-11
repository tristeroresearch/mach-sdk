/**
 * @module constants
 * @exports chains/networks/tokens/contracts/assets
 * @description Aggregates exports for tokens, contracts, assets, chains, and networks.
 * Networks are loaded from the network.ts file, where they are pulled from the config, gotten from the Mach API
 * Tokens are defined statically in the tokens.ts file
 */

import {
  ETHEREUM_ASSETS,
  OPTIMISM_ASSETS,
  ARBITRUM_ASSETS,
  CELO_ASSETS,
  BASE_ASSETS,
  POLYGON_ASSETS,
  AVALANCHE_ASSETS,
  ASSETS,
  arb,
  eth,
  op,
  avax,
  matic,
  polygon,
  base,
  celo,
  ARB,
  ETH,
  OP,
  AVAX,
  MATIC,
  POLYGON,
  BASE,
  CELO,
} from './tokens.js';

import {
  ETHEREUM_CONTRACTS,
  OPTIMISM_CONTRACTS,
  ARBITRUM_CONTRACTS,
  CELO_CONTRACTS,
  BASE_CONTRACTS,
  POLYGON_CONTRACTS,
  AVALANCHE_CONTRACTS,
} from './contracts.js';

export {
  ETHEREUM_ASSETS,
  OPTIMISM_ASSETS,
  ARBITRUM_ASSETS,
  CELO_ASSETS,
  BASE_ASSETS,
  POLYGON_ASSETS,
  AVALANCHE_ASSETS,
  ASSETS,
};

export {
  ETHEREUM_CONTRACTS,
  OPTIMISM_CONTRACTS,
  ARBITRUM_CONTRACTS,
  AVALANCHE_CONTRACTS,
  POLYGON_CONTRACTS,
  BASE_CONTRACTS,
  CELO_CONTRACTS,
};

export const tokens = {
  ETHEREUM_ASSETS,
  OPTIMISM_ASSETS,
  ARBITRUM_ASSETS,
  CELO_ASSETS,
  BASE_ASSETS,
  POLYGON_ASSETS,
  AVALANCHE_ASSETS,
  arb,
  eth,
  op,
  avax,
  matic,
  polygon,
  base,
  celo,
  ARB,
  ETH,
  OP,
  AVAX,
  MATIC,
  POLYGON,
  BASE,
  CELO,
};

export const contracts = {
  ETHEREUM_CONTRACTS,
  OPTIMISM_CONTRACTS,
  ARBITRUM_CONTRACTS,
  AVALANCHE_CONTRACTS,
  POLYGON_CONTRACTS,
  BASE_CONTRACTS,
  CELO_CONTRACTS,
  arb: ARBITRUM_CONTRACTS,
  eth: ETHEREUM_CONTRACTS,
  op: OPTIMISM_CONTRACTS,
  avax: AVALANCHE_CONTRACTS,
  matic: POLYGON_CONTRACTS,
  polygon: POLYGON_CONTRACTS,
  base: BASE_CONTRACTS,
  celo: CELO_CONTRACTS,
  ARB: ARBITRUM_CONTRACTS,
  ETH: ETHEREUM_CONTRACTS,
  OP: OPTIMISM_CONTRACTS,
  AVAX: AVALANCHE_CONTRACTS,
  MATIC: POLYGON_CONTRACTS,
  POLYGON: POLYGON_CONTRACTS,
  BASE: BASE_CONTRACTS,
  CELO: CELO_CONTRACTS,
};

export const assets = tokens;

import { chains } from './chains.js';
import { networks } from './networks.js';
export { chains, networks };
// Define the Constants object
export const Constants = {
  tokens,
  assets,
  contracts,
  chains,
};

export const MAX_UINT256 = BigInt(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
);

export const EVM_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
