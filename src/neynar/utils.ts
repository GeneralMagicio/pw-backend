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

  const newDelegations = await prisma.collectionDelegation.findMany({
    where: {
      platform: 'FARCASTER',
      createdAt: {
        gte: new Date(start),
        lte: end ? new Date(end) : new Date(),
      },
    },
  });

  const uniqueFids = Array.from(
    new Set(newDelegations.map((delegation) => delegation.target)),
  );

  console.log('Today new delegations FIDs: ', uniqueFids);

  if (uniqueFids.length === 0) {
    await prisma.$disconnect();
    return [];
  }

  const targetsDelegations = await prisma.collectionDelegation.findMany({
    where: {
      platform: 'FARCASTER',
      target: {
        in: uniqueFids,
      },
    },
  });

  const result: { fid: number; username: string; totalDelegates: number }[] =
    [];

  for (const delegation of targetsDelegations) {
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

  console.log('Today casts to be sent: ', result);

  await prisma.$disconnect();

  return result;
};

export const sendDailyCasts = async () => {
  const currentTimestamp = new Date();
  // Get the timestamp for 17:00 of the current day
  const endTimestamp = new Date(currentTimestamp);
  endTimestamp.setHours(17, 0, 0, 0); // set to 00:00:00
  const delegations = await getDelegations(
    endTimestamp.getTime() - 24 * 60 * 60 * 1000, // Get the timestamp for 17:00 of the previous day
    endTimestamp.getTime(),
  );
  if (!delegations || delegations.length === 0) return;
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
  const oneDelegate = totalDelegates === 1;
  if (!farcasterSignerUUID) {
    throw new Error(
      'Make sure you set FARCASTER_SIGNER_UUID in your .env file',
    );
  }
  await neynarClient.publishCast(
    farcasterSignerUUID,
    `@${username} 👋

🗳️ ${totalDelegates} ${
      oneDelegate ? 'person has' : 'people have'
    } delegated to you in @Pairwise's Liquid Democracy experiment!

🤝 Delegate this voting power to the @Farcaster users you trust to judge the impact of the governance projects in @Optimism's Retro Funding 6 round or vote yourself! 🫡

👇 
https://app.pairwise.vote 
`,
  );
  console.log(
    `Cast successfully sent to @${username} for ${totalDelegates} delegations`,
  );
};
