import { CollectionRanking } from 'src/flow/types';
import { toFixedNumber } from '../mathematical-logic';

export const validateRanking = (data: CollectionRanking) => {
  const max = data.share;
  let acc = 0;
  for (let i = 0; i < data.ranking.length; i++) {
    const row = data.ranking[i];
    if (toFixedNumber(row.share, 5) < 0 || toFixedNumber(row.share, 5) > 1) {
      return false;
    } else acc += row.share;

    if (row.type !== 'project' && row.hasRanking && !validateRanking(row))
      return false;

    if (acc - max > 0.001) {
      return false;
    }
  }
  return true;
};
