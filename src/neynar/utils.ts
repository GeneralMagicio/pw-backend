import { PrismaClient } from '@prisma/client';
import { FarcasterMetadata } from 'src/flow/types';

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

// Uncommect this to test

// const test = async () => {
//   const res = await getDelegations(1725759433 * 1000);

//   console.log(res);
// };

// void test();
