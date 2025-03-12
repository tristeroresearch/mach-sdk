/**
 * A helper function to get the gas for a transaction
 * @param chainName - The name of the chain
 * @param gasData - The gas data, if provided, it will be used instead of the gas recommendation
 * @returns The gas data
 */
import { GasData } from '../@types/gasData';
import { getMachGasRecommendation } from '../api';
import { config } from '../config';
import { ErrorMessage } from '../errors/constants';

export const getGasForTransaction = async (chainName: string, gasData?: GasData): Promise<GasData> => {
  const _config = await config;
  if (_config.getGasRecommendationOverride()) {
    if (!gasData) {
      return {
        gas_limit: _config.getGasLimit(),
        gas_price: _config.getGasFee(),
        priority_fee: _config.getPriorityFee(),
      };
    }
    return gasData;
  } else {
    const recommendedGas = await getMachGasRecommendation(chainName);
    if (!recommendedGas) throw new Error(ErrorMessage.FailedToFetchGasRecommendation);
    else {
      const gasForTransaction: GasData = {
        gas_limit: BigInt(recommendedGas.gas_estimate) * _config.getGasLimitMultiplier(),
        gas_price: BigInt(recommendedGas.gas_price) * _config.getGasFeeMultiplier(),
        priority_fee: BigInt(_config.getPriorityFee()),
      };
      return gasForTransaction;
    }
  }
};
