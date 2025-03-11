/**
 * @module constants
 * @description Error constants
 */

export enum ErrorName {
  RPCError = 'RPCError',
  ServerError = 'ServerError',
  TransactionError = 'TransactionError',
  ValidationError = 'ValidationError',
  BalanceError = 'BalanceError',
  NotFoundError = 'NotFoundError',
  UnknownError = 'UnknownError',
  SlippageError = 'SlippageError',
  HTTPError = 'HTTPError',
  WalletAddressZero = 'WalletAddressZero',
  FailedToFetchConfig = 'FailedToFetchConfig',
  FailedToFetchGasRecommendation = 'FailedToFetchGasRecommendation',
}

export type ErrorCode = MachErrorCode;

export enum MachErrorCode {
  InternalError = 1000,
  ValidationError = 1001,
  TransactionUnderpriced = 1002,
  TransactionFailed = 1003,
  Timeout = 1004,
  NotFound = 1005,
  GasLimitError = 1006,
  SignatureRejected = 1007,
  BalanceError = 1008,
  AllowanceRequired = 1009,
  InsufficientFunds = 1010,
  TransactionExpired = 1011,
  FailedToFetchGasRecommendation = 1012,
  FailedToFetchConfig = 1013,
}

export enum ErrorMessage {
  UnknownError = 'Unknown error occurred.',
  SlippageError = 'The slippage is larger than the defined threshold. Please request a new route to get a fresh quote.',
  GasLimitLow = 'Gas limit is too low.',
  WalletAddressZero = 'Wallet address is zero. Check wallet initialization.',
  AccountAddressZero = 'Account address is zero. Check wallet initialization.',
  FailedToFetchConfig = 'Failed to fetch remote config',
  FailedToFetchTokenBalance = 'Failed to fetch token balance',
  ContractDoesNotHaveReadFunction = 'Contract does not have a read function - May have failed to get the contract or the provided ABI may be wrong',
  PrivateKeyNotSet = 'process.env.PRIVATE_KEY is not set. Order requires a private key in the environment.',
  TransactionOnDifferentChain = 'Transaction is on a different chain than the source chain.',
  PrivateKeyNotPassed = 'Please pas your private key to set the wallet clients for the SDK (your private key is not stored!)',
  NetworkParameterMissing = 'Required parameter "network" is missing.',
  WalletParameterMissing = 'Required parameter "wallet" is missing.',
  NoOrderPlacedLogsFoundInTxReceipt = 'no OrderPlaced logs found in tx receipt',
  NoOrderFoundInTxReceipt = 'No order was found for this transaction. Please ensure the transaction was successful and contains an order.',
  GasFeeTooLow = 'The provided gas fee is too low for current network conditions. Please increase the gas fee to meet the base fee requirements. See ',
  TransactionNotFound = 'Transaction not found when attempting to market make. Please ensure the transaction was successful and contains a valid order.',
  TransactionUnderpriced = 'Transaction is underpriced. Please increase the gas fee to meet the base fee requirements.',
  FailedToFetchGasRecommendation = 'Failed to fetch gas recommendation. Please try again later.',
  FailedToFetchQuote = 'Failed to fetch quote for the provided parameters. Please try again.',
  TokenNotFound = 'Token not found in available tokens. Please check the token address.',
  DollarConversionFailed = 'Failed to convert dollar value to token amount.',
}
