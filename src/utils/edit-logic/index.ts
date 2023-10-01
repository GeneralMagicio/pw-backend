export interface OverallRankingType {
  id: number;
  collectionTitle: string;
  votingPower: number;
  ranking: OverallRankingType[] | Rank[];
}

export interface Rank {
  name: string;
  id: number;
  share: number;
}

const hasSubcollections = (
  input: OverallRankingType[] | Rank[],
): input is OverallRankingType[] => {
  if ('votingPower' in input[0]) return true;
  return false;
};

const isEditingRank = (val: Rank | OverallRankingType): val is Rank => {
  if ('ranking' in val) return false;
  return true;
};

const flattenRankingData = (ranking: OverallRankingType[]): Rank[] => {
  return ranking.reduce((acc, item) => {
    if (hasSubcollections(item.ranking)) {
      return [...acc, ...flattenRankingData(item.ranking)];
    } else return [...acc, ...item.ranking];
  }, [] as Rank[]);
};

export const validateRanking = (
  ranking: any[] | OverallRankingType[],
): ranking is OverallRankingType[] => {
  for (let i = 0; i < ranking.length; i++) {
    if (ranking[i].votingPower < 0) return false;
    else if (!isEditingRank(ranking[i].ranking[0])) {
      const val = validateRanking(ranking[i].ranking as OverallRankingType[]);
      if (val === false) return false;
    }
  }

  const flattenedRanking = flattenRankingData(ranking);

  const negativeValue = flattenedRanking.some((el) => el.share < 0);

  if (negativeValue) {
    console.log('neg value error');
    return false;
  }

  const percentageSum = flattenedRanking.reduce(
    (acc, curr) => (acc = acc + curr.share),
    0,
  );

  if (percentageSum > 1.01) {
    console.log('over 100 error', percentageSum);
    return false;
  }

  return true;
};
