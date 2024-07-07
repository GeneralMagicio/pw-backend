// import { RawSnapshotPoint } from './type';
// import { productionSnapshots } from './production-snapshot2';
// import { snapshots707 } from './snapshots707';
// import * as fs from 'fs'
// import { PrismaClient } from '@prisma/client';
// import { removeds } from './removeds';

// // function compareSnapshots(
// //   snapshot1: RawSnapshotPoint,
// //   snapshot2: RawSnapshotPoint,
// // ): boolean {
// //   // Iterate over the keys of the first snapshot
// //   for (const key in snapshot1) {
// //     // Compare the current key's value in both snapshots
// //     // Convert values to string to handle number vs string comparison correctly
// //     const value1 = snapshot1[key as keyof RawSnapshotPoint];
// //     const value2 = snapshot2[key as keyof RawSnapshotPoint];

// //     if (String(value1) !== String(value2)) {
// //       // Values differ, return true
// //       return true;
// //     }
// //   }

// //   // No differences found, return false
// //   return false;
// // }

// function findRepetitions(
//   snapshots: RawSnapshotPoint[],
//   snapshots2: RawSnapshotPoint[],
// ) {
//   // 764
//   let count = 0;
//   let countNotR = 0;
//   const addresses : string[] = [];
//   snapshots.forEach((el, index) => {
//     const exists = snapshots2.findIndex(
//       (item, i2) => item.User.toLowerCase() === el.User.toLowerCase(),
//     );

//     if (exists === -1) {
//       // console.log('Count:', count++);
//       // console.log('Item found', el);
//       addresses.push(el.User);
//       if (
//         Number(el.badgeholderPoints) > 0 ||
//         el.delegatePoints > 0 ||
//         el.holderPoints > 0
//       )
//         countNotR++;
//     }
//   });

//   console.log('Not recepients', countNotR);
//   console.log('Addresses', addresses);
// }

// findRepetitions(productionSnapshots, snapshots707)


// // export const findRemovedRecipients = async () => {  
// //     const prisma = new PrismaClient({
// //       datasources: {
// //         db: {
// //           url: process.env.POSTGRES_PRISMA_URL,
// //         },
// //       },
// //     });
  
// //     await prisma.$connect();

// //     const users = await prisma.user.findMany({
// //       where: {
// //         opAddress: {
// //           in: removeds,
// //         }
// //       }
// //     })

// //     console.log(users)
  
   
  
// //     await prisma.$disconnect();
  
// // }

// // findRemovedRecipients()
