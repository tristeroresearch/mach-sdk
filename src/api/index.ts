/**
 * @fileOverview This file serves as an entry point for the API module, re-exporting functions from various API files for easier access.
 * @exports apiGetConfig, apiGetFaucetFunds, apiGetEstimateGasPrice, getGasRecommendation, getTokenBalance, getTokenBalances, marketMake, apiGetNativeTokenPrices, apiGetAssets, apiGetQuote, getTransactionHistory.
 */

import { apiGetConfig } from './config.api.js';
import { apiGetFaucetFunds } from './faucet.api.js';
import { getMachGasRecommendation } from './getMachGasRecommendation.api.js';
import { getTokenBalance, getTokenBalances } from './getTokenBalances.api.js';
import { marketMake } from './marketMake.api.js';
import { apiGetNativeTokenPrices, apiGetAssets } from './price.api.js';
import { apiGetQuote } from './quote.api.js';
import { getTransactionHistory } from './transactionHistory.api.js';

export {
  apiGetConfig,
  apiGetFaucetFunds,
  getTokenBalance,
  getTokenBalances,
  getMachGasRecommendation,
  marketMake,
  apiGetNativeTokenPrices,
  apiGetAssets,
  apiGetQuote,
  getTransactionHistory,
};
