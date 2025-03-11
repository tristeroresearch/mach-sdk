import { Hex } from 'viem';
import { attemptToLoadPrivateKeyFromEnv } from '../attemptToLoadPrivateKeyFromEnv.util';
import { createWalletClients } from '../createWalletClients.util';

// Mock any needed environment variables or external dependencies here:
jest.mock('../../config', () => ({
  config: Promise.resolve({
    get: () => ({
      availableTokens: {},
    }),
    getGasRecommendationOverride: jest.fn(() => false),
    setWalletClients: jest.fn(),
  }),
}));

describe('attemptToLoadPrivateKeyFromEnv', () => {
  it('should throw an error if no private key is found', () => {
    // Example test (you can refine this with environment mocking)
    process.env.PRIVATE_KEY = '';
    expect(() => attemptToLoadPrivateKeyFromEnv()).toThrowError();
  });
  it('should return the provided private key if passed in', () => {
    const testKey = '0xtest123';
    expect(attemptToLoadPrivateKeyFromEnv(testKey)).toBe(testKey);
  });
});

describe('createWalletClients', () => {
  it('should create wallet clients for a given chain', () => {
    const validPrivateKey = ('0x' + '1'.repeat(64)) as Hex; // Type assertion for valid private key
    const result = createWalletClients('arbitrum', validPrivateKey);
    expect(result).toHaveProperty('publicClient');
    expect(result).toHaveProperty('walletClient');
    expect(result).toHaveProperty('account');
  });
});
