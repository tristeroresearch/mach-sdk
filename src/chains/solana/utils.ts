/**
 * @description: Solana utils
 * @author: Mach Exchange
 */

import { utils } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { Connection, PublicKey, PublicKeyInitData } from '@solana/web3.js';
import { ANCHOR_PROVIDER_URL } from '../../configs/env';

export const IRIS_API_URL = process.env.IRIS_API_URL ?? 'https://iris-api-sandbox.circle.com';
export const SOLANA_SRC_DOMAIN_ID = 5;
export const SOLANA_USDC_ADDRESS = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

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
    console.error('Solana compatible wallet not found! Get a Phantom Wallet 👻');
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
  extraSeeds: (string | number[] | Buffer | PublicKey)[] = []
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
    publicKey // Wallet address
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
