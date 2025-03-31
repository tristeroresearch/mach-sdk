import { arbitrum } from 'viem/chains';
import { createWalletClients } from '../../utils/createWalletClients.util';
import { getChainFromName } from '../../utils/getChainFromName.util.js';
import { Hex } from 'viem';
import dotenv from 'dotenv';

dotenv.config();
// Mock dependencies
jest.mock('../../utils/getChainFromName.util');

describe('createWalletClients', () => {
  const chain = 'arbitrum';
  const privateKey = '0x123';

  beforeEach(() => {
    jest.clearAllMocks();
    (getChainFromName as jest.Mock).mockResolvedValue(arbitrum);
  });

  it('should create wallet clients with the correct chain', async () => {
    const result = await createWalletClients(chain, privateKey);

    expect(getChainFromName).toHaveBeenCalledWith(chain);
    expect(result.publicClient.chain).toBe(arbitrum);
    expect(result.walletClient.chain).toBe(arbitrum);
  });

  it('should throw an error if chain is not supported', async () => {
    (getChainFromName as jest.Mock).mockRejectedValue(new Error('Chain not supported'));

    await expect(createWalletClients(chain, privateKey)).rejects.toThrow();
  });
});
