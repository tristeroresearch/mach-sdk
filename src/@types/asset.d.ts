export type Asset = {
  address: string;
  decimals: number;
  wrapped?: boolean;
  symbol_override?: boolean;
  cex_tickers?: {
    [key: string]: string;
  };
  usd_est?: number;
  image_url?: string;
};
