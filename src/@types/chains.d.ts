export type SolanaChain = 'mainnet-beta' | 'devnet';

export type EvmChain =
  | 'ethereum'
  | 'arbitrum'
  | 'base'
  | 'optimism'
  | 'polygon';

export type ChainCoins =
  | {
      [key in SolanaChain]: string;
    }
  | {
      [key in EvmChain]: string;
    };
