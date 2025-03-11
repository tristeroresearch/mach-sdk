/**
 * @module errors
 * @description Error classes
 */

import { BaseError } from './baseError.js';
import { ErrorName, MachErrorCode } from './constants.js';

export class RPCError extends BaseError {
  constructor(code: MachErrorCode, message: string, cause?: Error) {
    super(ErrorName.RPCError, code, message, cause);
  }
}

export class TransactionError extends BaseError {
  constructor(code: MachErrorCode, message: string, cause?: Error) {
    super(ErrorName.TransactionError, code, message, cause);
  }
}

export class UnknownError extends BaseError {
  constructor(message: string, cause?: Error) {
    super(ErrorName.UnknownError, MachErrorCode.InternalError, message, cause);
  }
}

export class BalanceError extends BaseError {
  constructor(message: string, cause?: Error) {
    super(ErrorName.BalanceError, MachErrorCode.BalanceError, message, cause);
  }
}

export class ServerError extends BaseError {
  constructor(message: string) {
    super(ErrorName.ServerError, MachErrorCode.InternalError, message);
  }
}

export class ValidationError extends BaseError {
  constructor(message: string) {
    super(ErrorName.ValidationError, MachErrorCode.ValidationError, message);
  }
}
