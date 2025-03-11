export type OrderItemResponse = {
  src_asset_address: string;
  dst_asset_address: string;
  src_amount: number;
  dst_amount: number;
  src_chain: string;
  dst_chain: string;
  place_tx: string;
  fill_tx: string;
};
