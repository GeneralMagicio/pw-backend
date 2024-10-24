import { PrismaClient } from '@prisma/client';
import { FarcasterMetadata } from 'src/flow/types';
import neynarClient from './neynarClient';

/**
 * Returns an array of `{fid, username, totalDelegates}` mapping in which `totalDelegates` is
 * the number of times that another user has delegated to this specific username/fid
 * @param start starting time for the query. In milliseconds from epoch.
 * @param end end time for the query. In milliseconds from epoch. If not specified, defaults to `now`.
 */
const getDelegations = async (start: number, end?: number) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });

  await prisma.$connect();

  const delegations = await prisma.collectionDelegation.findMany({
    where: {
      platform: 'FARCASTER',
      createdAt: {
        gte: new Date(start),
        lte: end ? new Date(end) : new Date(),
      },
    },
  });

  const result: { fid: number; username: string; totalDelegates: number }[] =
    [];

  for (const delegation of delegations) {
    const index = result.findIndex(
      (el) => el.fid === Number(delegation.target),
    );

    if (index === -1) {
      result.push({
        fid: Number(delegation.target),
        username: (delegation.metadata?.valueOf() as FarcasterMetadata)[
          'username'
        ],
        totalDelegates: 1,
      });
    } else {
      result[index].totalDelegates = result[index].totalDelegates + 1;
    }
  }

  await prisma.$disconnect();

  return result;
};

export const sendCastsFor12Hours = async () => {
  const currentTimestamp = new Date();
  // Get the timestamp for 00:00 of the current day
  const midnightTimestamp = new Date(currentTimestamp);
  midnightTimestamp.setHours(0, 0, 0, 0); // set to 00:00:00
  // Get the timestamp for 12:00 of the current day
  const noonTimestamp = new Date(currentTimestamp);
  noonTimestamp.setHours(12, 0, 0, 0); // set to 12:00:00
  // Check if the current time is past 00:00 and 12:00
  if (currentTimestamp < midnightTimestamp) {
    // If current time is earlier than today's midnight, subtract 1 day for midnight timestamp
    midnightTimestamp.setDate(midnightTimestamp.getDate() - 1);
  }
  if (currentTimestamp < noonTimestamp) {
    // If current time is earlier than today's noon, subtract 1 day for noon timestamp
    noonTimestamp.setDate(noonTimestamp.getDate() - 1);
  }
  let startTimestamp = midnightTimestamp.getTime();
  let endTimestamp = noonTimestamp.getTime();
  if (endTimestamp < startTimestamp) {
    [startTimestamp, endTimestamp] = [endTimestamp, startTimestamp];
  }
  const delegations = await getDelegations(startTimestamp, endTimestamp);
  for (const delegation of delegations) {
    await sendDelegationCast(delegation);
  }
};

const farcasterSignerUUID = process.env.FARCASTER_SIGNER_UUID;

const sendDelegationCast = async (props: {
  username: string;
  totalDelegates: number;
}) => {
  const { username, totalDelegates } = props || {};
  if (!farcasterSignerUUID) {
    throw new Error(
      'Make sure you set FARCASTER_SIGNER_UUID in your .env file',
    );
  }
  await neynarClient.publishCast(
    farcasterSignerUUID,
    `Hey @${username} 👋

${totalDelegates} people have delegated to you in the last 12 hours 🥳

They want you to vote on their behalf in the @Optimism Retro Funding 6 Round. Go to  https://app.pairwise.vote/ and rank the projects!`,
  );
};
