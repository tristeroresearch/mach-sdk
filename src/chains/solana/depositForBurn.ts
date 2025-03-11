/**
 * @module depositForBurn
 * @description Deposit for burn functions
 */

import { WalletContextState, useWallet } from '@solana/wallet-adapter-react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';
import * as anchor from '@coral-xyz/anchor';
import { Wallet } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { WalletSendTransactionError } from '@solana/wallet-adapter-base';
import {
  ComputeBudgetProgram,
  Keypair,
  PublicKey,
  SendTransactionError,
  Transaction,
} from '@solana/web3.js';
import {
  MESSAGE_TRANSMITTER_PROGRAM_ID,
  TOKEN_MESSENGER_MINTER_PROGRAM_ID,
  connection,
  initializeProgram,
} from './anchor/setup';
import {
  SOLANA_USDC_ADDRESS,
  SOLANA_USDC_ADDRESS as SOLANA_USDC_PROGRAM_ID,
  findProgramAddress,
  getSolUSDCTokenAccount,
} from './utils';

/**
 * @description: The solana wallet type
 */
type SolanaWallet = WalletContextState & {
  publicKey: PublicKey;
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
};

/**
 * @description: Use deposit for burn
 * @returns: The deposit for burn
 */
const useDepositForBurn = () => {
  const { publicKey, signTransaction } = useWallet();
  const wallet = useAnchorWallet();

  const getProvider = useCallback(() => {
    return new anchor.AnchorProvider(
      connection,
      wallet as SolanaWallet,
      anchor.AnchorProvider.defaultOptions(),
    );
  }, [connection, wallet]);

  const provider = getProvider();
  const program = initializeProgram(wallet as unknown as Wallet);

  /**
   * @description: Get the deposit for burn pdas
   * @returns: The pdas
   */
  const getDepositForBurnPdas = (destinationDomain: Number) => {
    const messageTransmitterAccount = findProgramAddress(
      'message_transmitter',
      MESSAGE_TRANSMITTER_PROGRAM_ID,
    );
    const tokenMessengerAccount = findProgramAddress(
      'token_messenger',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
    );
    const tokenMinterAccount = findProgramAddress(
      'token_minter',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
    );
    const localToken = findProgramAddress(
      'local_token',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
      [SOLANA_USDC_PROGRAM_ID],
    );
    const remoteTokenMessengerKey = findProgramAddress(
      'remote_token_messenger',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
      [destinationDomain.toString()],
    );
    const authorityPda = findProgramAddress(
      'sender_authority',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
    );
    const eventAuthority = findProgramAddress(
      '__event_authority',
      TOKEN_MESSENGER_MINTER_PROGRAM_ID,
    );

    return {
      messageTransmitterAccount,
      tokenMessengerAccount,
      tokenMinterAccount,
      localToken,
      remoteTokenMessengerKey,
      authorityPda,
      eventAuthority,
    };
  };

  /**
   * @description: Deposit for burn
   * @returns: The deposit for burn
   */
  const depositForBurn = async (
    sendAmount: number,
    recipientAddress: string,
    destinationDomain: number,
    solanaWalletAddress: string,
  ) => {
    const buffer = Buffer.from(recipientAddress.slice(2), 'hex');
    const mintRecipient = new PublicKey(buffer);
    const solanaPublicKey = wallet?.publicKey;
    const depositForBurnParams = {
      amount: new anchor.BN(sendAmount * 1e6),
      destinationDomain,
      mintRecipient,
    };

    try {
      if (!wallet) {
        throw new Error('Wallet is not connected');
      }

      if (!solanaPublicKey) {
        throw new Error('Public Key is not provided');
      }

      if (!signTransaction) {
        throw new Error('signTransaction is not found');
      }

      const burnTokenAccount = await getSolUSDCTokenAccount(solanaPublicKey);
      if (!burnTokenAccount) {
        throw new Error('User USDC token account is not provided');
      }

      const pdas = getDepositForBurnPdas(destinationDomain);

      // Generate a new keypair for the MessageSent event account.
      const messageSentEventAccountKeypair = Keypair.generate();

      const accounts = {
        owner: provider.wallet.publicKey || solanaWalletAddress,
        eventRentPayer: provider.wallet.publicKey || solanaWalletAddress,
        senderAuthorityPda: pdas.authorityPda.publicKey,
        burnTokenAccount: burnTokenAccount,
        messageTransmitter: pdas.messageTransmitterAccount.publicKey,
        tokenMessenger: pdas.tokenMessengerAccount.publicKey,
        remoteTokenMessenger: pdas.remoteTokenMessengerKey.publicKey,
        tokenMinter: pdas.tokenMinterAccount.publicKey,
        localToken: pdas.localToken.publicKey,
        burnTokenMint: SOLANA_USDC_ADDRESS,
        messageTransmitterProgram: MESSAGE_TRANSMITTER_PROGRAM_ID,
        tokenMessengerMinterProgram: TOKEN_MESSENGER_MINTER_PROGRAM_ID,
        messageSentEventData: messageSentEventAccountKeypair.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      };

      const unsignedTransaction = await program.methods
        .depositForBurn(depositForBurnParams)
        .accounts(accounts)
        .signers([messageSentEventAccountKeypair])
        .transaction();

      const { blockhash } = await connection.getLatestBlockhash();
      unsignedTransaction.recentBlockhash = blockhash;
      unsignedTransaction.feePayer = provider.publicKey;

      const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
        units: 65000, // Typically the compute units of our transaction are slightly below this
      });

      const response = await connection.getFeeForMessage(
        unsignedTransaction.compileMessage(),
        'confirmed',
      );
      const feeInLamports = response.value;

      const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 7500000,
      });

      const newTransaction = new Transaction()
        .add(modifyComputeUnits)
        .add(addPriorityFee);

      unsignedTransaction.instructions.forEach((instruction) => {
        newTransaction.add(instruction);
      });

      // create v0 compatible transaction message
      const transactionMessageV0 = new anchor.web3.TransactionMessage({
        payerKey: solanaPublicKey,
        recentBlockhash: blockhash,
        instructions: newTransaction.instructions,
      }).compileToV0Message();

      const versionedTransaction = new anchor.web3.VersionedTransaction(
        transactionMessageV0,
      );
      versionedTransaction.sign([messageSentEventAccountKeypair]);

      // Sign transaction with user wallet via Phantom Wallet
      const { phantom } = window as any;
      const { signature } =
        await phantom.solana.signAndSendTransaction(versionedTransaction);
      return signature;
    } catch (error) {
      if (error instanceof SendTransactionError) {
        const logs = await error.getLogs(connection);
        console.error('Sending Transaction failed. Logs:', logs);
      } else if (error instanceof WalletSendTransactionError) {
        console.error('Wallet Send Transaction failed:', error);
      } else {
        console.error('Error depositing for burn:', error);
      }
      throw error;
    }
  };

  return { depositForBurn };
};

export default useDepositForBurn;
