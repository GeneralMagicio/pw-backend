import * as fs from 'fs';
import { ethers } from 'ethers';

// Type definitions for badge data
type RawBadgeData = {
  holderPoints: number;
  delegatePoints: number;
  recipientsPoints: 0 | 1;
  badgeholderPoints: 0 | 1;
};

type BadgeData = {
  holderPoints?: number;
  delegatePoints?: number;
  recipientsPoints?: 1;
  badgeholderPoints?: 1;
};

// Import the ethers library

// Define an async function to resolve the ENS name
async function reverseENSLookup(address: string) {
  // Connect to the Ethereum network (mainnet)
  const provider = new ethers.JsonRpcProvider(
    'https://lb.drpc.org/ogrpc?network=ethereum&dkey=AkwVEpAy8kYom-mKjqkdWlU3QXKgGEMR77kfsvbGyHm5',
  );

  try {
    // Resolve the ENS name to an Ethereum address
    const ensName = await provider.lookupAddress(address);
    return ensName;
  } catch (error) {
    return null;
  }
}

const checkCSVDataValidity = (data: any): data is RawBadgeData => {
  if (
    ![0, 1].includes(data.recipientsPoints) ||
    ![0, 1].includes(data.badgeholderPoints) ||
    !(data.holderPoints >= 0) ||
    !(data.delegatePoints >= 0)
  )
    throw new Error('Invalid CSV file');

  return true;
};

export let processedCSV: Map<string, RawBadgeData>;

// Function to process CSV content and return a Map of BadgeData
export const processCSV = async (csvPath: string) => {
  const csvContent = fs.readFileSync(csvPath).toString();

  const rows = csvContent.split(/\r?\n/);
  const headers = rows[0].split(',');
  console.log('csvContent:', csvContent);
  const badgesMap = new Map<string, RawBadgeData>();
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].split(',');
    if (cells.length === headers.length) {
      const userAddress = cells[0].trim();
      const userData = {
        holderPoints: parseInt(cells[1], 10),
        delegatePoints: parseInt(cells[2], 10),
        recipientsPoints: parseInt(cells[3], 10),
        badgeholderPoints: parseInt(cells[4], 10),
      };
      if (!checkCSVDataValidity(userData)) return;

      badgesMap.set(userAddress, userData);
    }
  }
  console.log('Badges Map:', badgesMap);
  processedCSV = badgesMap;
  return badgesMap;
};

void processCSV(
  '/Users/mahdighajary/Projects/pw-backend/src/utils/badges/points_snapshot.csv',
);

// Function to get badge data by user address from the Map
export const getBadges = async (
  badgesMap: Map<string, RawBadgeData>,
  userAddress: string,
) => {
  let row: RawBadgeData | undefined = undefined;
  const ensName = await reverseENSLookup(userAddress);
  const temp = badgesMap.get(userAddress);
  if (!temp) {
    if (ensName) {
      const temp2 = badgesMap.get(ensName);
      if (temp2) row = temp2;
    }
  } else {
    row = temp;
  }

  if (!row) return undefined;

  const filtered: BadgeData = {};
  let key: keyof typeof row;
  for (key in row) {
    const value = row[key];
    if (value === 0) continue;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else filtered[key] = row[key];
  }

  return filtered;
};