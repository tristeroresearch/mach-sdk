export type Order = {
  sentDate: string;
  pair: string;
  buy: string;
  sell: string;
  quantity: number;
  paired: boolean;
  price: number;
  chain: string;
};

export type QuoteResponse = {
  bond_amount: bigint;
  bond_asset_address: string;
  bond_fee: number;
  challenge_offset: number;
  challenge_window: number;
  created_at: string;
  dst_amount: bigint;
  dst_asset_address: string;
  dst_chain: string;
  expired: boolean;
  expires_at: string;
  id: number;
  invalid_amount: boolean;
  liquidity_source: LiquiditySource;
  src_amount: bigint;
  src_asset_address: string;
  src_chain: string;
  wallet_address: string;
  destination_transaction_fee: number;
  destination_transaction_fee_usd: number;
  destination_transaction_fee_after_subsidy: number;
  destination_transaction_fee_after_subsidy_usd: number;
  reject_order: boolean;
};

export type OrderDirectionParameter = {
  srcAsset: string;
  dstAsset: string;
  dstLzc: number;
};

export type OrderFundingParameter = {
  srcQuantity: bigint;
  dstQuantity: bigint;
  bondFee: number;
  bondAsset: string;
  bondAmount: bigint;
};

export type OrderExpirationParameter = {
  timestamp: number;
  challengeOffset: number;
  challengeWindow: number;
};
