import { isBytes, isHex, keccak256 } from 'viem';

enum VerificationLevel {
  Orb = 'orb',
  Device = 'device',
}

export interface ISuccessResult {
  proof: string;
  merkle_root: string;
  nullifier_hash: string;
  verification_level: VerificationLevel;
}

interface HashFunctionOutput {
  hash: bigint;
  digest: `0x${string}`;
}

export interface IVerifyResponse {
  success: boolean;
  code?: string;
  detail?: string;
  attribute?: string | null;
}

/**
 * Converts an input to bytes and then hashes it with the World ID protocol hashing function.
 * @param input - String to hash
 * @returns hash
 */
function hashString(input: string): HashFunctionOutput {
  const bytesInput = Buffer.from(input);

  return hashEncodedBytes(bytesInput);
}

/**
 * Hashes raw bytes input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. Example use cases include when you're hashing an address to be verified in a smart contract.
 * @param input - Bytes represented as a hex string.
 * @returns
 */
function hashEncodedBytes(
  input: `0x${string}` | Uint8Array,
): HashFunctionOutput {
  const hash = BigInt(keccak256(input)) >> 8n;
  const rawDigest = hash.toString(16);

  return { hash, digest: `0x${rawDigest.padStart(64, '0')}` };
}

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. The function will try to determine the best hashing mechanism, if the string already looks like hex-encoded
 * bytes (e.g. `0x0000000000000000000000000000000000000000`), it will be hashed directly.
 * @param input Any string, hex-like string, bytes represented as a hex string.
 * @returns
 */
function hashToField(input: Uint8Array | string): HashFunctionOutput {
  if (isBytes(input) || isHex(input)) return hashEncodedBytes(input);

  return hashString(input);
}

export async function verifyCloudProof(
  proof: ISuccessResult,
  app_id: `app_${string}`,
  action: string,
  signal?: string,
  endpoint?: URL | string,
): Promise<IVerifyResponse> {
  const response = await fetch(
    endpoint ?? `https://developer.worldcoin.org/api/v2/verify/${app_id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...proof,
        action,
        signal_hash: hashToField(signal ?? '').digest,
      }),
    },
  );

  if (response.ok) {
    return { success: true };
  } else {
    return { success: false, ...(await response.json()) } as IVerifyResponse;
  }
}
