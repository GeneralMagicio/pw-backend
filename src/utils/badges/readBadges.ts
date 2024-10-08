import { ethers } from 'ethers';
import { RawSnapshotPoint } from './type';

const medalTypes = [
  'Bronze',
  'Diamond',
  'Platinum',
  'Gold',
  'Silver',
  'Whale',
] as const;

export type BadgeData = {
  holderPoints?: number;
  delegatePoints?: number;
  holderAmount?: number;
  delegateAmount?: number;
  recipientsPoints?: 1;
  badgeholderPoints?: 1;
  holderType?: (typeof medalTypes)[number];
  delegateType?: (typeof medalTypes)[number];
};

// Import the ethers library

// Define an async function to resolve the ENS name
async function reverseENSLookup(address: string) {
  const dkey = process.env.DKEY;
  // Connect to the Ethereum network (mainnet)
  const provider = new ethers.JsonRpcProvider(
    dkey
      ? `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${dkey}`
      : 'https://eth.llamarpc.com',
  );

  try {
    // Resolve the ENS name to an Ethereum address
    const ensName = await provider.lookupAddress(address);
    return ensName;
  } catch (error) {
    return null;
  }
}

function isNumeric(str: string): boolean {
  return /^\d+$/.test(str); // Matches positive integers
}

// Function to get badge data by user address from the Map
export const getBadges = async (
  points: RawSnapshotPoint[],
  userAddress: string,
) => {
  let row: RawSnapshotPoint | undefined = undefined;
  const ensName = await reverseENSLookup(userAddress);
  const temp = points.find(
    (el) => el.User.toLowerCase() === userAddress.toLowerCase(),
  );

  if (!temp) {
    if (ensName) {
      const temp2 = points.find(
        (el) => el.User.toLowerCase() === ensName.toLowerCase(),
      );
      if (temp2) row = temp2;
    }
  } else {
    row = temp;
  }

  if (!row) return undefined;

  const filtered: BadgeData = {};
  let key: keyof typeof row;
  for (key in row) {
    if (key === 'User') continue;
    const value = row[key];
    if (value === 0 || value === null || value === '0' || value === 'null')
      continue;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isNumeric(value)) filtered[key] = Number(value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else filtered[key] = value;
  }

  return filtered;
};
