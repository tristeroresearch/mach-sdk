/**
 * @module httpError
 * @description HTTP error class
 */

import { BaseError } from './baseError.js';
import { MachErrorCode } from './constants.js';
import { ErrorMessage, ErrorName } from './constants.js';

const statusCodeToErrorClassificationMap = new Map([
  [
    400,
    { type: ErrorName.ValidationError, code: MachErrorCode.ValidationError },
  ],
  [404, { type: ErrorName.NotFoundError, code: MachErrorCode.NotFound }],
  [500, { type: ErrorName.ServerError, code: MachErrorCode.InternalError }],
]);

const getErrorClassificationFromStatusCode = (code: number) =>
  statusCodeToErrorClassificationMap.get(code) ?? {
    type: ErrorName.ServerError,
    code: MachErrorCode.InternalError,
  };

export class HTTPError extends BaseError {
  public response: Response;
  public status: number;
  public url: RequestInfo | URL;
  public type?: ErrorName;
  public responseBody?: any;

  constructor(response: Response, url: RequestInfo | URL) {
    const errorClassification = getErrorClassificationFromStatusCode(
      response.status,
    );

    super(ErrorName.HTTPError, errorClassification.code, 'HTTP Error');

    this.type = errorClassification.type;
    this.response = response;
    this.status = response.status;
    this.url = url;
  }

  async buildAdditionalDetails() {
    if (this.type) {
      this.message = `[${this.type}] ${this.message}`;
    }

    try {
      this.responseBody = await this.response.json();

      if (this.responseBody) {
        this.message += this.message.endsWith('.')
          ? ` ${this.responseBody?.message.toString()}`
          : `. ${this.responseBody?.message.toString()}`;
      }
    } catch {}

    return this;
  }
}
