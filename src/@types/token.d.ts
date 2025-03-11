type PEG_TICKER = 'USD' | 'EUR' | 'XAU'; // Peg type to real world assets.

export type Token = {
  name: string;
  symbol: string;
  address: string; // TODO: Make address not simply a string. It should have a type like type TokenAddress = ETH_ADDRESS | SOL_ADDRESS, where these are well defined.
  chainId: number;
  decimals: number;
  unit: string;
  logoURI: string;
  native: boolean;
  zeroChainID?: number;
  uid?: number;
  wrapped?: boolean;
  isStableCoin?: boolean;
  peg_ticker?: PEG_TICKER;
};

export type Coin = {
  name: string;
  realName: string;
  lastPrice?: number;
  changes: number;
  chart: any[];
  capitalization: number;
};
