/**
 * @module SDKError
 * @description SDKError class
 */

import { version } from '../version.js';
import type { BaseError } from './baseError.js';
import type { ErrorCode } from './constants.js';

// Note: SDKError is used to wrap and present errors at the top level
export class SDKError extends Error {
  code: ErrorCode;
  override name = 'SDKError';
  override cause: BaseError;

  constructor(cause: BaseError) {
    const errorMessage = `${cause.message ? `[${cause.name}] ${cause.message}` : 'Unknown error occurred'}\nMach SDK version: ${version}`;
    super(errorMessage);
    this.name = 'SDKError';
    this.cause = cause;
    this.stack = this.cause.stack;
    this.code = cause.code;
  }
}
