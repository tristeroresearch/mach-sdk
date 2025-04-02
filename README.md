# Mach SDK

## Documentation

- Documentation for the SDK can be found [here](https://machprotocol.com/api-reference/sdk/library/).

## Roadmap

- [x] EVM ERC20 swaps for common tokens
- [ ] EVM WETH swaps
- [ ] Websocket listening for order events
- [ ] Full support for generic ERC20 swaps
- [ ] Solana swaps
- [ ] Tron swaps

## Quickstart

### Prerequisites

- Node.js 20+

### Installation

```bash
npm install @tristeroresearch/mach-sdk@latest
```

### Basic Usage

- The SDK uses private keys transaction signing. It assumes that you store a private key in a local variable called `PRIVATE_KEY`.
- Alternatively, you can pass a private key into the SDK functions, for example:

```ts
import { order } from '@tristeroresearch/mach-sdk';
import { tokens } from '@tristeroresearch/mach-sdk/constants';

order(tokens.arb.USDC, tokens.op.USDT, 10, null, 'example_private_key');
```

- In the above example, the `order` helper takes a source asset, a destination asset, an amount in dollars, a gas data object, and a private key
- Since the gas object is not provided, the SDK will automatically fetch the recommended gas fees from the Mach API

#### Testnet Support

The SDK supports both mainnet and testnet environments. When in testnet mode, you cannot use mainnet tokens or contracts. To use testnet:

```ts
import { order, config } from '@tristeroresearch/mach-sdk';
import { tokens } from '@tristeroresearch/mach-sdk/constants';

// Initialize the SDK config
const sdkConfig = await config;

// Enable testnet mode (automatically sets the testnet API URL)
await sdkConfig.setTestnetMode(true);

// Use testnet tokens for swaps (e.g., Sepolia tokens)
console.log(await order(tokens.sepolia.USDC, tokens.sepolia.USDT, 0.005));

// Switch back to mainnet mode
await sdkConfig.setMainnetMode(true);
```

When testnet mode is enabled:

- All operations will use testnet contracts and endpoints
- You must use testnet tokens (available in `tokens.sepolia.*`, `tokens.monadtestnet.*`, etc.)
- You must use testnet contracts (available in `contracts.sepolia.*`, `contracts.monadtestnet.*`, etc.)
- Mainnet tokens and contracts will not work
- The API URL is automatically set to the testnet endpoint
- This is useful for development and testing without using real assets

You can check the current mode using:

```ts
const isTestnet = await sdkConfig.getTestnetMode();
const isMainnet = await sdkConfig.getMainnetMode();
```

More simply, using `dotenv` to access a private key from the environment variables:

```ts
import { order, dollarToTokenValue } from '@tristeroresearch/mach-sdk';
import { tokens } from '@tristeroresearch/mach-sdk/constants';

// Convert $10 to token amount
const amount = await dollarToTokenValue(10, tokens.arb.USDC);

// Initiate a swap from Arbitrum USDC to Optimism USDT
const result = await order(tokens.arb.USDC, tokens.op.USDT, amount);
console.log(`Order complete: ${result.hash}`);
```

### Advanced Usage

You may want to manually control the process of getting a quote, submitting an order, and market making the order. You can use some more primitive helper functions like the following:

```ts
import { getQuote, submitOrder, marketMakeOrder } from '@tristeroresearch/mach-sdk';
import { tokens, chains } from '@tristeroresearch/mach-sdk/constants';

// For advanced control over the process
const key = process.env.PRIVATE_KEY as `0x${string}`;
const amount = await dollarToTokenValue(5, tokens.arb.USDC);

// Step 1: Get a quote
const quote = await getQuote(tokens.arb.USDC, tokens.op.USDT, amount, key);

// Step 2: Submit the order to the blockchain
const receipt = await submitOrder(quote, key);

// Step 3: Market make the order using the Mach market maker
const response = await marketMakeOrder(chains.arb, receipt);
```

### Notes on Mach Smart Contracts

- Transactions are placed on chain via a smart contract function on Mach's `Orderbook` contract called `PlaceOrder`.
- You can find the source code for the order book smart contract [here](https://github.com/tristeroresearch/OrderbookV2).

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

```

```
