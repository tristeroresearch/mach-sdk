import { chains } from '../../constants/chains';
import { createWalletClients } from '../../utils/createWalletClients.util.js';
import { getChainFromName } from '../../utils/getChainFromName.util.js';
import { arbitrum } from 'viem/chains';
import dotenv from 'dotenv';
import { Hex } from 'viem';

dotenv.config();
// Mock dependencies
jest.mock('../../utils/getChainFromName.util');

describe('createWalletClients', () => {
  it('should create wallet clients with valid inputs', () => {
    // Arrange

    const privateKey = process.env.PRIVATE_KEY as Hex;
    const chain = chains.arbitrum;

    (getChainFromName as jest.Mock).mockReturnValue(arbitrum);
    // Act
    const { publicClient, walletClient, account } = createWalletClients(
      chain,
      privateKey,
    );

    // Assert that wallet clients are created
    expect(publicClient).toBeDefined();
    expect(walletClient).toBeDefined();
    expect(account).toBeDefined();
    expect(getChainFromName).toHaveBeenCalledWith(chain);
  });

  it('should handle invalid chain names gracefully', () => {
    // Arrange
    (getChainFromName as jest.Mock).mockReturnValue(null);
    const privateKey =
      '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef';
    const chain = 'invalidChain';

    // Act & Assert
    expect(() => createWalletClients(chain, privateKey)).toThrow();
  });
});
