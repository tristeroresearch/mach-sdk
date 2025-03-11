import singleChainSwapContractAbiRaw from './abi/singleChainSwapContract.abi.json';
import swapContractAbiRaw from './abi/swapContract.abi.json';
import wrappedEthAbiRaw from './abi/wrappedEth.abi.json';
import cctpOfficialContractAbiRaw from './abi/cctpOfficialContract.abi.json';
import cctpWrapperContractAbiRaw from './abi/cctpWrapperContract.abi.json';
import optimisticContractAbiRaw from './abi/optimisticContract.abi.json';
import orderBookContractAbiRaw from './abi/orderBookV2.1Contract.abi.json';
import erc20AbiRaw from './abi/erc20.abi.json';

export const abi = {
  singleChain: singleChainSwapContractAbiRaw,
  swap: swapContractAbiRaw,
  weth: wrappedEthAbiRaw,
  cctpOfficial: cctpOfficialContractAbiRaw,
  cctpWrapper: cctpWrapperContractAbiRaw,
  optimistic: optimisticContractAbiRaw,
  orderBook: orderBookContractAbiRaw,
  erc20: erc20AbiRaw,
};
