/**
 * A configuration file for the SDK
 * Loads the config from the Mach API
 * The config contains the available tokens, networks, and swap contracts for the Mach Platform
 * Uses a singleton pattern to ensure that the config is only loaded once
 * Provides getters to access the config variables
 * Provides a setter to update the config object and the wallet clients
 * @module config
 */

import { getChainName, getGasToken } from './configs/chainInfo';
import { getChainId } from './configs/chainInfo';
import { WETH_ADDRESSES } from './configs/tokenAddresses';
import { ConfigLoadingStatus } from './enums';
import { createWalletClients } from './utils/createWalletClients.util';
import { type Hex } from 'viem';
import { apiGetConfig } from './api';
import { BACKEND_API_URL } from './configs/env';
import {
  DEFAULT_INTEGRATOR,
  DEFAULT_MAX_FEE_PER_GAS,
  DEFAULT_MAX_PRIORITY_FEE_PER_GAS,
  DEFAULT_GAS_LIMIT_MULTIPLIER,
  DEFAULT_GAS_FEE_MULTIPLIER,
} from './configs/defaults';
import { type Token } from './@types/token';
import { type Network } from './@types/network';

// The initial state props interface, defined as an interface to allow extension by the Config interface
interface InitialStateProps {
  resolverPaused: boolean;
  loading: ConfigLoadingStatus;
  availableTokens: Token[];
  availableNetworks: Record<string, Network>;
  swapContracts: Record<string, any>;
  publicClient: any;
  account: any;
  userId?: string;
  apiKey?: string;
  machGasRecommendationOverride: boolean;
}

// The config interface extends the InitialStateProps type
interface Config extends InitialStateProps {
  integrator: string;
  apiUrl: string;
  chains: any[];
  preloadChains: boolean;
  debug: boolean;
  publicClient: any;
  account: any;
  key: Hex;
  priorityFeePerGas: bigint;
  feePerGas: bigint;
  gasLimitMultiplier: bigint;
  gasLimit: bigint;
  gasFeeMultiplier: bigint;
}

let _config: Config = {
  integrator: '',
  apiUrl: '',
  chains: [],
  preloadChains: false,
  debug: false,
  resolverPaused: false,
  loading: ConfigLoadingStatus.Loading,
  availableTokens: [],
  availableNetworks: {},
  swapContracts: {},
  publicClient: null,
  account: null,
  key: null,
  priorityFeePerGas: BigInt(0),
  feePerGas: BigInt(0),
  gasLimitMultiplier: BigInt(0),
  machGasRecommendationOverride: false,
  gasLimit: BigInt(0),
  gasFeeMultiplier: BigInt(0),
};

export const setConfig = (newConfig: Partial<Config>) => {
  _config = {
    ..._config,
    ...newConfig,
  };
};

/**
 * Loads the config from the Mach API
 * The config contains the available tokens, networks, and swap contracts for the Mach Platform
 * Uses a singleton pattern to ensure that the config is only loaded once
 * Provides getters to access the config variables
 * Provides a setter to update the config object and the wallet clients
 * @returns {Object} An object with methods to get and set the config and wallet clients
 */
export const config = (async () => {
  const _config: Config = {
    integrator: '',
    apiUrl: '',
    chains: [],
    preloadChains: true,
    debug: false,
    resolverPaused: false,
    loading: ConfigLoadingStatus.Loading,
    availableTokens: [],
    availableNetworks: {},
    swapContracts: {},
    publicClient: null,
    account: null,
    key: null,
    priorityFeePerGas: BigInt(0),
    feePerGas: BigInt(0),
    gasLimitMultiplier: BigInt(0),
    machGasRecommendationOverride: false,
    gasLimit: BigInt(0),
    gasFeeMultiplier: BigInt(0),
  };

  const _isLoaded = false;

  //Set priorityFeePerGas, feePerGas, and gasLimitMultiplier to default values
  function initializeConfig() {
    _config.integrator = DEFAULT_INTEGRATOR;
    _config.apiUrl = BACKEND_API_URL;
    _config.priorityFeePerGas = DEFAULT_MAX_PRIORITY_FEE_PER_GAS;
    _config.feePerGas = DEFAULT_MAX_FEE_PER_GAS;
    _config.gasLimitMultiplier = DEFAULT_GAS_LIMIT_MULTIPLIER;
    _config.gasFeeMultiplier = DEFAULT_GAS_FEE_MULTIPLIER;
  }

  // Load the config from the Mach API
  async function loadConfig() {
    // If the config is already loaded, return
    if (_isLoaded) return;

    // Fetch the config from the Mach API
    // If the config is not available, an error will be thrown in the apiGetConfig function
    // Since the config is critical to the SDK, we want to fail fast if it's not available
    const configData = await apiGetConfig();

    const { deployments }: { deployments: Record<string, any> } = configData;

    // Initialize the availableTokens, availableNetworks, and swapContracts objects
    const availableTokens: Token[] = [];
    const availableNetworks: Record<string, Network> = {};
    const swapContracts: Record<string, any> = { cctp: {}, optimistic: {} };

    // Iterate over the networks in the deployments object
    Object.keys(deployments).forEach((networkKey) => {
      const {
        abbreviation,
        assets = {},
        chain_id,
        cctp_id,
        lz_cid,
        contracts = {},
      }: {
        abbreviation: string;
        assets: Record<string, any>;
        chain_id: number;
        cctp_id: number;
        lz_cid: number;
        contracts: Record<string, any>;
      } = deployments[networkKey];

      // Add the network to the availableNetworks object
      availableNetworks[chain_id] = {
        name: getChainName(networkKey),
        gasToken: getGasToken(networkKey),
        abbreviation,
        icon: `/assets/network/${networkKey}.png`,
        cctp_id,
        lz_id: lz_cid,
      };

      // Add the network to the availableNetworks object
      availableNetworks[networkKey] = {
        name: getChainName(networkKey),
        gasToken: getGasToken(networkKey),
        abbreviation,
        icon: `/assets/network/${networkKey}.png`,
        cctp_id,
        lz_id: lz_cid,
      };

      // If the network has a WETH address, add it to the availableTokens object
      if (WETH_ADDRESSES[getChainId(networkKey)]) {
        availableTokens.push({
          symbol: `W${getGasToken(networkKey)}`,
          logoURI: `/assets/token/w${getGasToken(networkKey).toLowerCase()}.png`,
          name: `W${getGasToken(networkKey)}`,
          unit: `w${getGasToken(networkKey).toLowerCase()}`,
          chainId: chain_id,
          zeroChainID: lz_cid,
          address: WETH_ADDRESSES[getChainId(networkKey)],
          decimals: 18,
          native: false,
          wrapped: true,
        });
      }

      // Iterate over the assets in the deployments object, and add them to the availableTokens object
      for (const [key, value] of Object.entries(assets)) {
        availableTokens.push({
          symbol: key,
          logoURI: `/assets/token/${key?.toLowerCase()}.png`,
          name: key,
          unit: key?.toLowerCase(),
          chainId: chain_id,
          zeroChainID: lz_cid,
          address: value.address,
          decimals: value.decimals,
          native: false,
          wrapped: value.wrapped,
        });
      }

      // Iterate over the contracts in the deployments object, and add them to the swapContracts object
      for (const [type, address] of Object.entries(contracts)) {
        // If the type is not in the swapContracts object, initialize it
        if (!swapContracts[type]) swapContracts[type] = {};
        // Add the contract address to the swapContracts object
        swapContracts[type][chain_id] = address;
      }
    });

    //Assign the loaded config variables to the _config object
    Object.assign(_config, {
      availableTokens,
      availableNetworks,
      swapContracts,
    });
  }

  initializeConfig();
  // Load the config from the Mach API
  await loadConfig();

  let _loading: Promise<void> | undefined;
  return {
    set loading(loading: Promise<void>) {
      _loading = loading;
    },

    get(): Config {
      return _config;
    },

    getWalletKey() {
      return _config.account.key;
    },

    getWalletAddress() {
      return _config.account.address;
    },

    getPublicClient() {
      return _config.publicClient;
    },

    getTokens() {
      return _config.availableTokens;
    },

    getNetworks() {
      return _config.availableNetworks;
    },

    getSwapContracts() {
      return _config.swapContracts;
    },

    setWalletClients(privateKey: Hex, srcChain: string) {
      const { publicClient, account } = createWalletClients(srcChain, privateKey);

      // Update the _config object with publicClient and account
      _config.publicClient = publicClient;
      _config.account = account;
    },

    updateConfigWithClients(key: Hex, publicClient: any, account: any) {
      _config.key = key;
      _config.publicClient = publicClient;
      _config.account = account;
    },

    getConfig() {
      return _config;
    },

    getIntegrator() {
      return _config.integrator;
    },

    setIntegrator(integrator: string) {
      _config.integrator = integrator;
    },

    getApiUrl() {
      return _config.apiUrl;
    },

    setApiUrl(apiUrl: string) {
      _config.apiUrl = apiUrl;
    },

    getPriorityFeePerGas() {
      return _config.priorityFeePerGas;
    },

    setPriorityFeePerGas(priorityFeePerGas: bigint) {
      _config.priorityFeePerGas = priorityFeePerGas;
    },

    getPriorityFee() {
      return _config.priorityFeePerGas;
    },

    setPriorityFee(priorityFee: bigint) {
      _config.priorityFeePerGas = priorityFee;
    },

    getFeePerGas() {
      return _config.feePerGas;
    },

    setFeePerGas(feePerGas: bigint) {
      _config.feePerGas = feePerGas;
    },

    getGasFee() {
      return _config.feePerGas;
    },

    getGasLimit() {
      return _config.gasLimit;
    },

    setGasLimit(gasLimit: bigint) {
      _config.gasLimit = gasLimit;
    },

    setGasFee(gasFee: bigint) {
      _config.feePerGas = gasFee;
    },

    getGasLimitMultiplier() {
      return _config.gasLimitMultiplier;
    },

    setGasLimitMultiplier(gasLimitMultiplier: bigint) {
      _config.gasLimitMultiplier = gasLimitMultiplier;
    },

    getGasRecommendationOverride() {
      return _config.machGasRecommendationOverride;
    },

    setGasRecommendationOverride(gasRecommendationOverride: boolean) {
      _config.machGasRecommendationOverride = gasRecommendationOverride;
    },

    getGasFeeMultiplier() {
      return _config.gasFeeMultiplier;
    },

    setGasFeeMultiplier(gasFeeMultiplier: bigint) {
      _config.gasFeeMultiplier = gasFeeMultiplier;
    },
  };
})();
