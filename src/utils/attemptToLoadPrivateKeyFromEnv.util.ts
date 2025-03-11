import { Hex } from 'viem';
import { ErrorMessage } from '../errors/constants';

export const attemptToLoadPrivateKeyFromEnv = (privateKey?: Hex): Hex => {
  if (!privateKey) {
    privateKey = process.env.PRIVATE_KEY as Hex;
    if (!privateKey) throw new Error(ErrorMessage.PrivateKeyNotPassed);
  }
  return privateKey;
};
