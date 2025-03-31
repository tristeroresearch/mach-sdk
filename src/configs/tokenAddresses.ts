/**
 * @module tokenAddresses
 * @description Token address constants
 */

import { supportedChains } from './supportedChains';
import { TOKEN_LIST } from './tokens';

export const NULLADDRESS = '0x0000000000000000000000000000000000000000';

// Create a type-safe, readonly mapping of WETH addresses by chain ID
export const WETH_ADDRESSES: Readonly<Record<number, string>> = {
  1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // Ethereum Mainnet
  5: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', // Goerli Testnet
  11155111: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9', // Sepolia Testnet
  42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // Arbitrum
  10: '0x4200000000000000000000000000000000000006', // Optimism
  8453: '0x4200000000000000000000000000000000000006', // Base Mainnet
  81457: '0x4300000000000000000000000000000000000004', // Blast Mainnet
  56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // Binance Smart Chain (BSC)
  34443: '0x4200000000000000000000000000000000000006', // MODE Mainnet WETH
  137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // Polygon
  43114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // Avalanche
  5000: '0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8', // Mantle
  204: '0x4200000000000000000000000000000000000006', // opBNB
  10143: '0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37', // Monad Testnet
};

export const tokenAddress = (networkId: number | string, symbol: string): string | null => {
  const chainId = typeof networkId === 'string' ? supportedChains.find((o) => o.name === networkId)?.id : networkId;

  if (chainId) {
    const token = TOKEN_LIST.find((token) => token.chainId === chainId && token.symbol === symbol);

    return token ? token.address : null;
  } else {
    return null;
  }
};
