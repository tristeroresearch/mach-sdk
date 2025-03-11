/**
 * @module contracts
 * @exports contracts
 * @description This module defines constants for various smart contract addresses across different blockchain networks.
 * @constant ETHEREUM_CONTRACTS, OPTIMISM_CONTRACTS, ARBITRUM_CONTRACTS, AVALANCHE_CONTRACTS, POLYGON_CONTRACTS, BASE_CONTRACTS, CELO_CONTRACTS - Contract addresses grouped by their respective networks.
 */

import { type Hex } from 'viem';

export const ETHEREUM_CONTRACTS: Record<string, Hex> = {
  order_book: '0x137092D65b9f4861C7Fc2B58cd7Fd52aA0ADFEb0',
  cctp_message_transmitter: '0x0a992d191DEeC32aFe36203Ad87D7d289a738F81',
  cctp_token_messenger: '0xBd3fa81B58Ba92a82136038B25aDec7066af3155',
  uniswap_v3_quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
  uniswap_v3_router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0x16C6521Dff6baB339122a0FE25a9116693265353',
  odos_router: '0xCf5540fFFCdC3d510B18bFcA6d2b9987b0772559',
};

export const OPTIMISM_CONTRACTS: Record<string, Hex> = {
  order_book: '0x5861b75321c3f9CD25BaF61CCE59f87C77b33F90',
  cctp_message_transmitter: '0x4D41f22c5a0e5c74090899E5a8Fb597a8842b3e8',
  cctp_token_messenger: '0x2B4069517957735bE00ceE0fadAE88a26365528f',
  uniswap_v3_quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
  uniswap_v3_router: '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0xF0d4c12A5768D806021F80a262B4d39d26C58b8D',
  odos_router: '0xCa423977156BB05b13A2BA3b76Bc5419E2fE9680',
};

export const ARBITRUM_CONTRACTS: Record<string, Hex> = {
  order_book: '0xd8b8B056cE030b32d6C5198Ae1d14952a56A0458',
  cctp_message_transmitter: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',
  cctp_token_messenger: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
  uniswap_v3_quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
  uniswap_v3_router: '0x5E325eDA8064b456f4781070C0738d849c824258',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0xF0d4c12A5768D806021F80a262B4d39d26C58b8D',
  odos_router: '0xa669e7A0d4b3e4Fa48af2dE86BD4CD7126Be4e13',
};

export const AVALANCHE_CONTRACTS: Record<string, Hex> = {
  order_book: '0xD98ad5D97982C7C2cd55Dc89B96DF9fB67631D77',
  cctp_message_transmitter: '0x8186359aF5F57FbB40c6b14A588d2A59C0C29880',
  cctp_token_messenger: '0x6B25532e1060CE10cc3B0A99e5683b91BFDe6982',
  uniswap_v3_quoter: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
  uniswap_v3_router: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0xF0d4c12A5768D806021F80a262B4d39d26C58b8D',
  odos_router: '0x88de50B233052e4Fb783d4F6db78Cc34fEa3e9FC',
};

export const POLYGON_CONTRACTS: Record<string, Hex> = {
  order_book: '0x3Ceedd8F86dcf54D0A34EEF0e933c70fc3A7e958',
  cctp_message_transmitter: '0xF3be9355363857F3e001be68856A2f96b4C39Ba9',
  cctp_token_messenger: '0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE',
  uniswap_v3_quoter: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e',
  uniswap_v3_router: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0xF0d4c12A5768D806021F80a262B4d39d26C58b8D',
  odos_router: '0x4E3288c9ca110bCC82bf38F09A7b425c095d92Bf',
};

export const BASE_CONTRACTS: Record<string, Hex> = {
  order_book: '0x026A0145Ca797737B773A4745ebb9CbE9DAe4802',
  cctp_message_transmitter: '0xAD09780d193884d503182aD4588450C416D6F9D4',
  cctp_token_messenger: '0x1682Ae6375C4E4A97e4B583BC394c861A46D8962',
  uniswap_v3_quoter: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  uniswap_v3_router: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  curve_router: '0xd6681e74eEA20d196c15038C580f721EF2aB6320',
  odos_router: '0x19cEeAd7105607Cd444F5ad10dd51356436095a1',
};

export const CELO_CONTRACTS: Record<string, Hex> = {
  order_book: '0x00d82945D5869544979419C4970bF32f7fCdAa32',
  uniswap_v3_quoter: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
  uniswap_v3_router: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
  uniswap_permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
};
