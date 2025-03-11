/**
 * @description: Solana utils
 * @author: Mach Exchange
 */

import { useEffect, useState } from 'react';
import { utils } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { Connection, PublicKey, PublicKeyInitData } from '@solana/web3.js';
import { ANCHOR_PROVIDER_URL } from '../../configs/env';

export const IRIS_API_URL =
  process.env.IRIS_API_URL ?? 'https://iris-api-sandbox.circle.com';
export const SOLANA_SRC_DOMAIN_ID = 5;
export const SOLANA_USDC_ADDRESS = new PublicKey(
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
);

export const SOLANA_CONNECTION = new Connection(ANCHOR_PROVIDER_URL || '');
export const SOLANA_CHAIN_ID = 900;
export const TRON_CHAIN_ID = 728126428;

/**
 * @description: Check if the wallet is connected
 * @returns: The wallet address
 */
export const checkIfWalletIsConnected = async () => {
  const { phantom } = window as any;
  if (!phantom.solana.isConnected) {
    await phantom.solana.connect();
  } else {
    console.error(
      'Solana compatible wallet not found! Get a Phantom Wallet 👻',
    );
  }
  return phantom.solana._publicKey.toString() as string;
};

/**
 * @description: Find the program address
 * @returns: The program address
 */
export type FindProgramAddressResponse = {
  publicKey: PublicKey;
  bump: number;
};

export const findProgramAddress = (
  label: string,
  programId: PublicKey,
  extraSeeds: (string | number[] | Buffer | PublicKey)[] = [],
): FindProgramAddressResponse => {
  const seeds = [Buffer.from(utils.bytes.utf8.encode(label))];
  if (extraSeeds) {
    for (const extraSeed of extraSeeds) {
      if (typeof extraSeed === 'string') {
        seeds.push(Buffer.from(utils.bytes.utf8.encode(extraSeed)));
      } else if (Array.isArray(extraSeed)) {
        seeds.push(Buffer.from(new Uint8Array(extraSeed.map(Number))));
      } else if (extraSeed instanceof PublicKey) {
        seeds.push(Buffer.from(extraSeed.toBuffer()));
      } else {
        throw new Error('Unsupported extraSeed type');
      }
    }
  }
  const res = PublicKey.findProgramAddressSync(seeds, programId);
  return { publicKey: res[0], bump: res[1] };
};

/**
 * @description: Get the solana transaction receipt
 * @returns: The transaction receipt
 */
export const getSolanaTransactionReceipt = async (txHash: string) => {
  const receipt = await SOLANA_CONNECTION.getTransaction(txHash, {
    commitment: 'finalized',
    maxSupportedTransactionVersion: 0,
  });
  return receipt;
};

/**
 * @description: Get the solana usdc token account
 * @returns: The token account
 */
export const getSolUSDCTokenAccount = async (publicKey: PublicKey) => {
  const associatedTokenAddress = await getAssociatedTokenAddress(
    SOLANA_USDC_ADDRESS, // Token mint address
    publicKey, // Wallet address
  );
  return associatedTokenAddress;
};

/**
 * @description: The balance type
 */
export type Balance = {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

/**
 * @description: Get the solana token balance
 * @returns: The token balance
 */
const useSolanaTokenBalance = (
  walletAddress: string,
  tokenMintAddress: string,
): { balance: Balance | undefined; isLoading: boolean } => {
  const [balance, setBalance] = useState<Balance | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  let publicKey: PublicKey;
  let tokenMintPublicKey: PublicKeyInitData;
  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (!walletAddress || !tokenMintAddress) {
        return { balance: undefined, isLoading: false };
      }
      try {
        publicKey = new PublicKey(walletAddress);
        tokenMintPublicKey = new PublicKey(tokenMintAddress);
        PublicKey.isOnCurve(tokenMintPublicKey) === true;
      } catch {
        console.error('Not a Solana wallet!');
        return;
      }

      // Fetch all token accounts for the wallet address
      const tokenAccounts =
        await SOLANA_CONNECTION.getParsedTokenAccountsByOwner(publicKey, {
          programId: TOKEN_PROGRAM_ID,
        });

      // Find the specified token account
      const tokenAccount = tokenAccounts.value.find(
        (accountInfo) =>
          accountInfo.account.data.parsed.info.mint ===
          tokenMintPublicKey.toString(),
      );

      if (tokenAccount) {
        const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;
        const tokenBalance: Balance = {
          decimals: tokenAmount.decimals,
          formatted: tokenAmount.uiAmountString,
          symbol: 'USDC', // Assuming USDC, modify if needed
          value: BigInt(tokenAmount.amount as string),
        };
        setBalance(tokenBalance);
      } else {
        console.error('tokenAccount not found:', tokenAccount);
        setBalance(undefined);
      }
      setIsLoading(false);
    };
    fetchTokenBalance();
  }, [walletAddress, tokenMintAddress]);

  return { balance, isLoading };
};

export default useSolanaTokenBalance;
