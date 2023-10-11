import { toFixedNumber } from '../mathematical-logic';

export interface OverallRankingType {
  id: number;
  name: string;
  type: 'composite project' | 'collection';
  share: number;
  ranking: OverallRankingType[] | Rank[];
}

export interface Rank {
  name: string;
  id: number;
  share: number;
  type: 'project';
}

export const flattenRankingData = (input: OverallRankingType): Rank[] => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return input.ranking.reduce(
    (acc: Rank[], item: OverallRankingType | Rank) => {
      if (item.type === 'project') return [...acc, item];
      else return [...acc, ...flattenRankingData(item as OverallRankingType)];
    },
    [] as Rank[],
  );
};

export const validateRanking = (ranking: OverallRankingType[]) => {
  for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].share < 0) return false;
    else {
      for (let j = 0; j < ranking[i].ranking.length; j++) {
        if (ranking[i].ranking[j].type !== 'project') {
          const val = validateRanking([
            ranking[i].ranking[j] as OverallRankingType,
          ]);
          if (val === false) return false;
        }
      }
    }
  }

  const flattenedRanking = flattenRankingData({
    ranking,
    id: -1,
    name: 'Root',
    share: 1,
    type: 'collection',
  });

  const negativeValue = flattenedRanking.some(
    (el) => toFixedNumber(el.share, 4) < 0,
  );

  if (negativeValue) {
    console.log('neg value error');
    return false;
  }

  const percentageSum = flattenedRanking.reduce(
    (acc, curr) => (acc = acc + curr.share),
    0,
  );

  if (percentageSum > 1.02) {
    console.log('over 100 error', percentageSum);
    return false;
  }

  return true;
};
