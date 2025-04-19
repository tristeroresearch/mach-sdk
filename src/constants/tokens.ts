/**
 * @module tokens
 * @fileOverview This module defines constants for various cryptocurrency assets across different blockchain networks.
 * @constant ETHEREUM_ASSETS, OPTIMISM_ASSETS, ARBITRUM_ASSETS, CELO_ASSETS - Asset details grouped by their respective networks.
 * @export ASSETS - A unified export of all assets, providing a centralized way to reference assets across different networks.
 */

import type { Asset } from '../@types/asset.d.ts';

export const ETHEREUM_ASSETS: { [key: string]: Asset } = {
  ETH: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  USDC: {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  DAI: {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  AUSD: {
    address: '0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a',
    decimals: 6,
  },
  eth: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  dai: {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  ausd: {
    address: '0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a',
    decimals: 6,
  },
};
export const OPTIMISM_ASSETS: { [key: string]: Asset } = {
  ETH: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  USDC: {
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  DAI: {
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  crvUSD: {
    address: '0xC52D7F23a2e460248Db6eE192Cb23dD12bDDCbf6',
    decimals: 18,
  },
  USDM: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  USDC_e: {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    symbol_override: true,
  },
  FRAX: {
    address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
    decimals: 18,
  },
  MIM: {
    address: '0xB153FB3d196A8eB25522705560ac152eeEc57901',
    decimals: 18,
  },
  eth: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  dai: {
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  crvusd: {
    address: '0xC52D7F23a2e460248Db6eE192Cb23dD12bDDCbf6',
    decimals: 18,
  },
  usdm: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  usdc_e: {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    symbol_override: true,
  },
  frax: {
    address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
    decimals: 18,
  },
  mim: {
    address: '0xB153FB3d196A8eB25522705560ac152eeEc57901',
    decimals: 18,
  },
};

export const ARBITRUM_ASSETS: { [key: string]: Asset } = {
  ETH: {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  USDC: {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  eth: {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  crvUSD: {
    address: '0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5',
    decimals: 18,
  },
  crvusd: {
    address: '0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5',
    decimals: 18,
  },
};

export const CELO_ASSETS: { [key: string]: Asset } = {
  USDC: {
    address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    symbol_override: true,
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdc: {
    address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
};

export const BASE_ASSETS: { [key: string]: Asset } = {
  ETH: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  USDC: {
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDbC: {
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    decimals: 6,
  },
  DAI: {
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    decimals: 18,
  },
  USDM: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  crvUSD: {
    address: '0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93',
    decimals: 18,
  },
  cgUSD: {
    address: '0xCa72827a3D211CfD8F6b00Ac98824872b72CAb49',
    decimals: 6,
  },
  axlUSDC: {
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    decimals: 6,
  },
  tBTC: {
    address: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    decimals: 18,
    usd_est: 2e13,
  },
  USDz: {
    address: '0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938',
    decimals: 18,
  },
  wstETH: {
    address: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
    decimals: 18,
  },
  ezETH: {
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    decimals: 18,
  },
  rETH: {
    address: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
    decimals: 18,
  },
  AERO: {
    address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    decimals: 18,
  },
  RDNT: {
    address: '0xd722E55C1d9D9fA0021A5215Cbb904b92B3dC5d4',
    decimals: 18,
  },
  MIGGLES: {
    address: '0xB1a03EdA10342529bBF8EB700a06C60441fEf25d',
    decimals: 18,
  },
  YFI: {
    address: '0x9EaF8C1E34F05a589EDa6BAfdF391Cf6Ad3CB239',
    decimals: 18,
  },
  ZRO: {
    address: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    decimals: 18,
  },
  eth: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    usd_est: 3e14,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdbc: {
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    decimals: 6,
  },
  dai: {
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    decimals: 18,
  },
  usdm: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  crvusd: {
    address: '0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93',
    decimals: 18,
  },
  cgusd: {
    address: '0xCa72827a3D211CfD8F6b00Ac98824872b72CAb49',
    decimals: 6,
  },
  axludsc: {
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    decimals: 6,
  },
  tbtc: {
    address: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    decimals: 18,
    usd_est: 2e13,
  },
  usdz: {
    address: '0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938',
    decimals: 18,
  },
  weteth: {
    address: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
    decimals: 18,
  },
  ezeth: {
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    decimals: 18,
  },
  reth: {
    address: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
    decimals: 18,
  },
  aero: {
    address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    decimals: 18,
  },
  rdnt: {
    address: '0xd722E55C1d9D9fA0021A5215Cbb904b92B3dC5d4',
    decimals: 18,
  },
  miggles: {
    address: '0xB1a03EdA10342529bBF8EB700a06C60441fEf25d',
    decimals: 18,
  },
  yfi: {
    address: '0x9EaF8C1E34F05a589EDa6BAfdF391Cf6Ad3CB239',
    decimals: 18,
  },
  zro: {
    address: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    decimals: 18,
  },
};

export const POLYGON_ASSETS: { [key: string]: Asset } = {
  POL: {
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    decimals: 18,
    usd_est: 5e17,
    wrapped: true,
    symbol_override: true,
    image_url: 'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
  },
  USDC: {
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  DAI: {
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    decimals: 18,
  },
  crvUSD: {
    address: '0xc4Ce1D6F5D98D65eE25Cf85e9F2E9DcFEe6Cb5d6',
    decimals: 18,
  },
  USDM: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  FRAX: {
    address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
    decimals: 18,
  },
  USDC_e: {
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    decimals: 6,
    symbol_override: true,
  },
  WBTC: {
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    decimals: 8,
    usd_est: 2000,
  },
  miMATIC: {
    address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    decimals: 18,
    usd_est: 5e17,
  },
  jEUR: {
    address: '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c',
    decimals: 18,
  },
  PAR: {
    address: '0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128',
    decimals: 18,
  },
  EURS: {
    address: '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99',
    decimals: 2,
  },
  EURT: {
    address: '0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f',
    decimals: 6,
  },
  LINK: {
    address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    decimals: 18,
  },
  UNI: {
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    decimals: 18,
  },
  WETH: {
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    decimals: 18,
  },
  AAVE: {
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    decimals: 18,
  },
  CRV: {
    address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
    decimals: 18,
  },
  MKR: {
    address: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
    decimals: 18,
  },
  LDO: {
    address: '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756',
    decimals: 18,
  },
  wstETH: {
    address: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
    decimals: 18,
  },
  GRT: {
    address: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
    decimals: 18,
  },
  USD_plus: {
    address: '0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f',
    decimals: 6,
  },
  RNDR: {
    address: '0x61299774020dA444Af134c82fa83E3810b309991',
    decimals: 18,
  },
  SAND: {
    address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
    decimals: 18,
  },
  AVAX: {
    address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
    decimals: 18,
  },
  APE: {
    address: '0xB7b31a6BC18e48888545CE79e83E06003bE70930',
    decimals: 18,
  },
  SUSHI: {
    address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    decimals: 18,
  },
  ORBS: {
    address: '0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff',
    decimals: 18,
  },
  MANA: {
    address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    decimals: 18,
  },
  SNX: {
    address: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
    decimals: 18,
  },
  KNC: {
    address: '0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C',
    decimals: 18,
  },
  STG: {
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    decimals: 18,
  },
  WOO: {
    address: '0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603',
    decimals: 18,
  },
  FXS: {
    address: '0x1a3acf6D19267E2d3e7f898f42803e90C9219062',
    decimals: 18,
  },
  BUSD: {
    address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
    decimals: 18,
  },
  pol: {
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    decimals: 18,
    usd_est: 5e17,
    wrapped: true,
    symbol_override: true,
    image_url: 'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
  },
  usdc: {
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  dai: {
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    decimals: 18,
  },
  crvusd: {
    address: '0xc4Ce1D6F5D98D65eE25Cf85e9F2E9DcFEe6Cb5d6',
    decimals: 18,
  },
  usdm: {
    address: '0x59D9356E565Ab3A36dD77763Fc0d87fEaf85508C',
    decimals: 18,
  },
  frax: {
    address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
    decimals: 18,
  },
  usdc_e: {
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    decimals: 6,
    symbol_override: true,
  },
  wbtc: {
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    decimals: 8,
    usd_est: 2000,
  },
  mimatic: {
    address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    decimals: 18,
    usd_est: 5e17,
  },
  jeur: {
    address: '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c',
    decimals: 18,
  },
  par: {
    address: '0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128',
    decimals: 18,
  },
  eurs: {
    address: '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99',
    decimals: 2,
  },
  eurt: {
    address: '0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f',
    decimals: 6,
  },
  link: {
    address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    decimals: 18,
  },
  uni: {
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    decimals: 18,
  },
  weth: {
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    decimals: 18,
  },
  aave: {
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    decimals: 18,
  },
  crv: {
    address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
    decimals: 18,
  },
  mkr: {
    address: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
    decimals: 18,
  },
  ldo: {
    address: '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756',
    decimals: 18,
  },
  wsteth: {
    address: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
    decimals: 18,
  },
  grt: {
    address: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
    decimals: 18,
  },
  usd_plus: {
    address: '0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f',
    decimals: 6,
  },
  rndr: {
    address: '0x61299774020dA444Af134c82fa83E3810b309991',
    decimals: 18,
  },
  sand: {
    address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
    decimals: 18,
  },
  avax: {
    address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
    decimals: 18,
  },
  ape: {
    address: '0xB7b31a6BC18e48888545CE79e83E06003bE70930',
    decimals: 18,
  },
  sushi: {
    address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    decimals: 18,
  },
  orbs: {
    address: '0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff',
    decimals: 18,
  },
  mana: {
    address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    decimals: 18,
  },
  snx: {
    address: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
    decimals: 18,
  },
  knc: {
    address: '0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C',
    decimals: 18,
  },
  stg: {
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    decimals: 18,
  },
  woo: {
    address: '0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603',
    decimals: 18,
  },
  fxs: {
    address: '0x1a3acf6D19267E2d3e7f898f42803e90C9219062',
    decimals: 18,
  },
  busd: {
    address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
    decimals: 18,
  },
};

export const AVALANCHE_ASSETS: { [key: string]: Asset } = {
  AVAX: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimals: 18,
    usd_est: 4e16,
    wrapped: true,
    symbol_override: true,
    image_url: 'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
  },
  USDC: {
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDt: {
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  FRAX: {
    address: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
    decimals: 18,
  },
  DAI_e: {
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimals: 18,
  },
  USDC_e: {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    symbol_override: true,
  },
  USDT_e: {
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimals: 6,
  },
  avax: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    decimals: 18,
    usd_est: 4e16,
    wrapped: true,
    symbol_override: true,
    image_url: 'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
  },
  usdc: {
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  frax: {
    address: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
    decimals: 18,
  },
  dai_e: {
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    decimals: 18,
  },
  usdc_e: {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    symbol_override: true,
  },
  usdt_e: {
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimals: 6,
  },
};

export const SEPOLIA_ASSETS: { [key: string]: Asset } = {
  WETH: {
    address: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  USDC: {
    address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0x7169D38820dfd117C3FA1f22a697dBA58d90BA06',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  DAI: {
    address: '0x68194a729c2450ad26072b3d33adacbcef39d574',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  weth: {
    address: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x7169D38820dfd117C3FA1f22a697dBA58d90BA06',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  dai: {
    address: '0x68194a729c2450ad26072b3d33adacbcef39d574',
    decimals: 18,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
};

export const MONADTESTNET_ASSETS: { [key: string]: Asset } = {
  WETH: {
    address: '0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  WMON: {
    address: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
  },
  wmon: {
    address: '0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
  },
  USDC: {
    address: '0xf817257fed379853cDe0fa4F97AB987181B1E5Ea',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  USDT: {
    address: '0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  weth: {
    address: '0xB5a30b0FDc5EA94A52fDc42e3E9760Cb8449Fb37',
    decimals: 18,
    wrapped: true,
    symbol_override: true,
    image_url:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  usdc: {
    address: '0xf817257fed379853cDe0fa4F97AB987181B1E5Ea',
    decimals: 6,
    cex_tickers: {
      binance: 'USDC',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
  usdt: {
    address: '0x88b8E2161DEDC77EF4ab7585569D2415a1C1055D',
    decimals: 6,
    cex_tickers: {
      binance: 'USDT',
    },
    image_url: 'https://assets.coingecko.com/coins/images/1280/large/usdt.png?1696506707',
  },
};

export const arb = ARBITRUM_ASSETS;
export const ARB = ARBITRUM_ASSETS;

export const eth = ETHEREUM_ASSETS;
export const ETH = ETHEREUM_ASSETS;

export const op = OPTIMISM_ASSETS;
export const OP = OPTIMISM_ASSETS;

export const avax = AVALANCHE_ASSETS;
export const AVAX = AVALANCHE_ASSETS;

export const matic = POLYGON_ASSETS;
export const MATIC = POLYGON_ASSETS;
export const polygon = POLYGON_ASSETS;
export const POLYGON = POLYGON_ASSETS;

export const base = BASE_ASSETS;
export const BASE = BASE_ASSETS;

export const celo = CELO_ASSETS;
export const CELO = CELO_ASSETS;

export const sepolia = SEPOLIA_ASSETS;
export const SEPOLIA = SEPOLIA_ASSETS;

export const monadtestnet = MONADTESTNET_ASSETS;
export const MONADTESTNET = MONADTESTNET_ASSETS;

export const ASSETS: { [key: string]: { [key: string]: Asset } } = {
  ETHEREUM: ETHEREUM_ASSETS,
  OPTIMISM: OPTIMISM_ASSETS,
  ARBITRUM: ARBITRUM_ASSETS,
  CELO: CELO_ASSETS,
  BASE: BASE_ASSETS,
  POLYGON: POLYGON_ASSETS,
  AVALANCHE: AVALANCHE_ASSETS,
  SEPOLIA: SEPOLIA_ASSETS,
  MONADTESTNET: MONADTESTNET_ASSETS,
  ethereum: ETHEREUM_ASSETS,
  optimism: OPTIMISM_ASSETS,
  arbitrum: ARBITRUM_ASSETS,
  celo: CELO_ASSETS,
  base: BASE_ASSETS,
  polygon: POLYGON_ASSETS,
  avalanche: AVALANCHE_ASSETS,
  sepolia: SEPOLIA_ASSETS,
  monadtestnet: MONADTESTNET_ASSETS,
  eth: ETHEREUM_ASSETS,
  op: OPTIMISM_ASSETS,
  opt: OPTIMISM_ASSETS,
  arb: ARBITRUM_ASSETS,
  matic: POLYGON_ASSETS,
  ETH: ETHEREUM_ASSETS,
  OP: OPTIMISM_ASSETS,
  OPT: OPTIMISM_ASSETS,
  AVAX: AVALANCHE_ASSETS,
  ARB: ARBITRUM_ASSETS,
  MATIC: POLYGON_ASSETS,
};
