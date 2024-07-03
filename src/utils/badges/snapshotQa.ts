/* 

import { RawSnapshotPoint, productionSnapshot } from './snapshot';
import { snapshots } from './snapshot703';

function compareSnapshots(
  snapshot1: RawSnapshotPoint,
  snapshot2: RawSnapshotPoint,
): boolean {
  // Iterate over the keys of the first snapshot
  for (const key in snapshot1) {
    // Compare the current key's value in both snapshots
    // Convert values to string to handle number vs string comparison correctly
    const value1 = snapshot1[key as keyof RawSnapshotPoint];
    const value2 = snapshot2[key as keyof RawSnapshotPoint];

    if (String(value1) !== String(value2)) {
      // Values differ, return true
      return true;
    }
  }

  // No differences found, return false
  return false;
}

function findRepetitions(
  snapshots: RawSnapshotPoint[],
  snapshots2: RawSnapshotPoint[],
) {
  let count = 0
  snapshots.forEach((el, index) => {
    const exists = snapshots2.findIndex(
      (item, i2) => item.User === el.User,
    );

    if (exists === -1) {
      console.log("Item found", count++)
    }
  });
}

findRepetitions(snapshots, productionSnapshot);

*/
