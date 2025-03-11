import { SOLANA_CHAIN_ID } from '../chains/solana/utils';
import { supportedChains } from '../configs/supportedChains';

export const getBlockExplorerUrlFromId = (chainId: string | number) => {
  if (chainId === SOLANA_CHAIN_ID) {
    return 'https://solscan.io/tx/';
  }
  const chainInfo = supportedChains.find((chain) => +chain.id === +chainId);
  return `${chainInfo?.blockExplorers['default'].url || ''}/tx`;
};
