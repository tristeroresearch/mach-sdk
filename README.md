# Mach SDK

## Prerequisites

- Node.js 20+

## Internal Development

While we are testing here internally, the appropriate npm package is `@ggarza5/mach-sdk1`.
Installed in client scripts like this:

```bash
npm install @ggarza5/mach-sdk1@latest
```

## Documentation

- Documentation for the SDK can be found [here](https://machprotocol.com/api-reference/sdk/library/).

## Roadmap

- [x] EVM ERC20 swaps for common tokens
- [ ] EVM WETH swaps
- [ ] Websocket listening for order events
- [ ] Full support for generic ERC20 swaps
- [ ] Solana swaps
- [ ] Tron swaps

## Project Structure

### @types

Defines common types used by the SDK, such as:

- Balance
- Chain
- Network
- Order Response
- Order
- Token

### api

API helper functions for interacting with the Mach API, e.g.:

- Fetching the dynamic configuration object in `src/api/config.api.ts`
- Getting recommended gas fees in `src/api/getMachGasRecommendation.api.ts`
- Getting a wallet's transaction history in `src/api/transactionHistory.api.ts`

### chains

Contains Solana configurations that will be used in a future release.

### configs

Defines the chains and tokens that are supported by the SDK.

### constants

Holds constant values used by the SDK and for convenience in applications, such as:

- The Mach platform's contract addresses across different chains in `src/constants/contractAddresses.ts`
- Asset addresses across different chains in `src/constants/assetAddresses.ts`
- Network configurations like chain IDs, LayerZero IDs, abbreviations, etc. in `src/constants/networkConfigs.ts`

### contract

Includes ABI (Application Binary Interface) definitions for smart contracts, allowing interaction with the Mach platform's contracts, as well as the erc20 and wrappedEth contracts.

### helpers

Contains utility functions for blockchain operations, such as:

- Creating wallet clients for interacting with the blockchain (via `createWalletClients.helper.ts`)
- Building order data for submitting orders to the blockchain (via `encodeOrderData.helper.ts`)
- Interacting with the Mach market maker to complete swaps after submission to the blockchain (via `makeOrder.helper.ts`)
- Transaction signing (via `signTransaction.helper.ts`)
- Generating block explorer URLs (via `getBlockExplorerUrl.helper.ts`)

### utils

Contains utility functions for the SDK, such as:

- Getting gas values for transactions (via `getGasForTransaction.util.ts`)
