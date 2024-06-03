import { ethers } from 'ethers';

/**
 * Verifies that a signature comes from a given Ethereum address.
 *
 * @param message - The original message that was signed.
 * @param signature - The signature in hexadecimal format.
 * @param claimedAddress - The Ethereum address claimed to have signed the message.
 * @returns - A boolean indicating whether the signature is valid.
 */
export async function verifySignature(
  message: string,
  signature: string,
  claimedAddress: string,
): Promise<boolean> {
  // Hash the message with the Ethereum prefix
  const messageHash = ethers.hashMessage(message);

  // Recover the address from the signature and hashed message
  const recoveredAddress = ethers.recoverAddress(messageHash, signature);

  // Compare the recovered address with the claimed address
  return recoveredAddress.toLowerCase() === claimedAddress.toLowerCase();
}
