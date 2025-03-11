export enum ConfigLoadingStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export enum ExchangeType {
  OrderBook = 'order_book',
  CctpTokenMessenger = 'cctp_token_messenger',
}

export enum ResultCode {
  Success = 'Success',
  Failure = 'Failure',
  Pending = 'Pending',
}

export enum LiquiditySource {
  MarketMaker = 'market_maker',
  CctpDirect = 'cctp_direct',
  Unavailable = 'unavailable',
}

export enum OrderResponseMessage {
  OrderSent = 'Order successfully sent.',
  OrderPending = 'Order accepted but will take 5-20 minutes to find a match.',
  OrderNotFilled = 'Order will not be filled by the market maker at this time.',
  PayloadError = 'Error in the payload.',
  UnexpectedError = 'Unexpected error occurred.',
  UnspecifiedError = 'An unspecified error occurred.',
  ErrorDecodingOrderData = 'Error decoding order data',
  OrderNotFound = 'No order was found for this transaction',
}

export enum FunctionName {
  Approve = 'approve',
  Transfer = 'transfer',
  TransferFrom = 'transferFrom',
  PlaceOrder = 'placeOrder',
  Decimals = 'decimals',
  Allowance = 'allowance',
}

export enum SpecialAddress {
  Zero = '0x0000000000000000000000000000000000000000',
}

export enum EventName {
  OrderPlaced = 'OrderPlaced',
}

export enum TransactionType {
  EIP1559 = 'eip1559',
  Legacy = 'legacy',
}
