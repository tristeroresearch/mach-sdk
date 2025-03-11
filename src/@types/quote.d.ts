// src/@types/quote.d.ts
export type Quote = {
  wallet_address: string;
  src_chain: string;
  dst_chain: string;
  src_amount: string;
  dst_amount: string;
  bond_amount: string;
  bond_fee: number;
  src_asset_address: string;
  dst_asset_address: string;
  bond_asset_address: string;
  challenge_offset: number;
  challenge_window: number;
  invalid_amount: boolean;
  liquidity_source: string;
  created_at: string;
  expires_at: string;
  order_data: {
    contract_address: string;
    order_direction: {
      src_token_address: string;
      dst_token_address: string;
      src_lzc: number;
      dst_lzc: number;
    };
    order_funding: {
      src_amount_in: string;
      dst_amount_out: string;
      bond_token_address: string;
      bond_amount: string;
      bond_fee: string;
    };
    order_expiration: {
      timestamp: number;
      challenge_offset: number;
      challenge_window: number;
    };
    target_address: string;
    filler_address: string;
  };
  destination_transaction_fee: number;
  destination_transaction_fee_usd: number;
  destination_transaction_fee_after_subsidy: number;
  destination_transaction_fee_after_subsidy_usd: number;
  destination_transaction_fee_subsidy_usd: number;
  reject_order: boolean;
};
