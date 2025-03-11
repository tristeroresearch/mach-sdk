/**
 * Converts an address to bytes32 (right-aligned)
 * @param address - The address to convert
 * @returns The address in bytes32 format
 */
export const toBytes32 = (address: string) => {
  const cleanAddress = address.toLowerCase().replace('0x', '');
  return `0x${cleanAddress.padStart(64, '0')}`;
};
