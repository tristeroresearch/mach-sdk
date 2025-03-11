import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { ANCHOR_PROVIDER_URL } from "../../../configs/env";
import { IDL, TokenMessengerMinter } from "./idl";

export const connection = new Connection(ANCHOR_PROVIDER_URL || "", {
  commitment: "confirmed",
  disableRetryOnRateLimit: false,
  confirmTransactionInitialTimeout: 120000, // Set timeout to 2 minutes
});

export const TOKEN_MESSENGER_MINTER_PROGRAM_ID = new PublicKey(
  "CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3"
);
export const MESSAGE_TRANSMITTER_PROGRAM_ID = new PublicKey(
  "CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd"
);

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<TokenMessengerMinter>(
  IDL,
  TOKEN_MESSENGER_MINTER_PROGRAM_ID,
  {
    connection,
  }
);

export const [tokenMessengerMinter] = PublicKey.findProgramAddressSync(
  [Buffer.from("token_messenger_minter")],
  program.programId
);

const getProvider = (connection: Connection, wallet: Wallet) => {
  return new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions()
  );
};

export const initializeProgram = (wallet: Wallet) => {
  const provider = getProvider(connection, wallet);
  return new Program(IDL, TOKEN_MESSENGER_MINTER_PROGRAM_ID, provider);
};
