function calculateValue(rank: number, total: number): number {
  const B8 = 10; // Assuming delta is 45 degrees, adjust as needed
  const pi = Math.PI;

  if (rank > total) {
    return 0;
  } else {
    const calculation =
      (total - rank + 1 - total / 2) * Math.tan((B8 * pi) / 180) + 1 / total;
    return calculation < 0 ? 0 : calculation;
  }
}

const normalizer = (numbers: number[]) => {
  const sum = numbers.reduce((acc, curr) => (acc += curr), 0);

  return numbers.map((el) => el / sum);
};

const addMin = (numbers: number[], min: number) => {
  return numbers.map((el) => (el < min ? min : el));
};

function applyVariance(
  value: number,
  rank: number,
  total: number,
  variance: number,
): number {
  return (value * total) / (total + (rank + 1) * variance);
}

const addHandicap = (values: number[], handicap: number, cutoff: number) => {
  const coeff =
    values.length > cutoff
      ? 1 + ((values.length - cutoff) / cutoff) * handicap
      : 1;
  return values.map((el) => el * coeff);
};

export const getRankingDistribution = (collectionLength: number) => {
  const values = [];

  const variance = 3;
  const handicap = 1.22;
  const cutoff = 15;
  const min = 0.015;

  for (let i = 0; i < collectionLength; i++) {
    const val = calculateValue(i + 1, collectionLength);

    values.push(val);
  }

  const normalized = normalizer(values);

  const withMin = addMin(normalized, min);

  const withVariance = withMin.map((el, i) =>
    applyVariance(el, i + 1, withMin.length, variance),
  );

  const withVarianceNormal = normalizer(withVariance);

  const withHandicap = addHandicap(withVarianceNormal, handicap, cutoff);

  return withHandicap;
};
