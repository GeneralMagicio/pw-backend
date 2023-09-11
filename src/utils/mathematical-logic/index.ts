import { add, column, eigs, matrix, multiply, re } from 'mathjs';

export const generateZeroMatrix = (n: number): number[][] => {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};

const validateVotesMatrix = (votesMatrix: number[][]) => {
  for (let i = 0; i < votesMatrix.length; i++) {
    for (let j = 0; j < votesMatrix[i].length; j++) {
      const cell = votesMatrix[i][j];
      // values should be either 0 or 1
      if (![0, 1].includes(cell))
        throw Error('Invalid value for a pairwise vote');
      // diagnoals should be zero
      if (i === j) {
        if (cell !== 0)
          throw new Error("You can't compare a project with itself");
      }
      // You can't prefer project A to B and then again B to A
      if (cell + votesMatrix[j][i] > 1)
        throw new Error(`Invalid value at ${i},${j} and ${j},${i}`);
    }
    if (votesMatrix[i].length !== votesMatrix.length)
      throw new Error('Matrix is not square');
  }
  return true;
};

export const toFixedNumber = (num: number, digits: number) => {
  const pow = Math.pow(10, digits);
  return Math.round(num * pow) / pow;
};

const isRankingUseful = (ranking: number[]) => {
  const numOfZeros = ranking.filter(
    (score) => toFixedNumber(score, 2) <= 0.01,
  ).length;

  if (numOfZeros >= ranking.length / 2) return false;

  const sortedRanking = [...ranking].sort();

  const median = sortedRanking[Math.floor(sortedRanking.length / 2)];
  const max = sortedRanking[sortedRanking.length - 1];

  if (max / median > 10) return false;

  return true;
};

function cloneArray<T extends unknown[]>(a: T): T {
  const array = a.map((e) => (Array.isArray(e) ? cloneArray(e) : e)) as T;

  return array;
}

export const getRankingForSetOfDampingFactors = (input: number[][]) => {
  const dampingFactors = [
    1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35,
    0.3, 0.25, 0.2, 0.15, 0.1, 0.05, 0,
  ];
  let isUseful = false;
  let i = 0;
  let ranking: number[] = [];
  while (!isUseful && i < dampingFactors.length) {
    try {
      ranking = calculateCollectionRanking(input, dampingFactors[i]);
      isUseful = isRankingUseful(ranking);
    } catch (e) {
    } finally {
      i += 1;
    }
  }

  if (!ranking) {
    console.error('No useful ranking available for this vote matrix');
  }

  return ranking;
};

export const calculateCollectionRanking = (
  input: number[][],
  dampingFactor = 1,
) => {
  let votesMatrix = cloneArray(input);

  validateVotesMatrix(votesMatrix);

  const length = votesMatrix.length;

  // Set the diagnoals to the sum of the rows

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      const cell = votesMatrix[i][j];
      sum += cell;
    }
    votesMatrix[i][i] = sum;
  }

  // Divide each column's items by the sum of the column's items

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      const cell = votesMatrix[j][i];
      sum += cell;
    }
    for (let j = 0; j < length; j++) {
      if (sum !== 0) votesMatrix[j][i] = votesMatrix[j][i] / sum;
      else votesMatrix[j][i] = 0;
    }
  }

  // add a damping factor
  const dampingMatrix = matrix(
    Array(length).fill(Array(length).fill((1 - dampingFactor) / length)),
  );

  votesMatrix = add(
    multiply(dampingFactor, votesMatrix),
    dampingMatrix,
  ).valueOf() as number[][];

  // compute the eigenvalue
  const { values, vectors } = eigs(votesMatrix, 0.01);

  const index = findEigenvalueOfOne(values as any);

  const eigenvectors = vectors
    .map((_, i, self) => column(self, index))
    .map((vector) => re(vector))
    .map((vector) => vector.flat(1));

  // Find the one with constant sign (all positives or all negatives)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filtered = eigenvectors[index].flat(1);

  // Divide by the smallest component
  return divideBySum(divideBySmallest(filtered));
};

const findEigenvalueOfOne = (eigenvalues: number[]) =>
  eigenvalues.findIndex((item) => 1 - toFixedNumber(item, 2) < 0.01);

const divideBySmallest = (numbers: number[]): number[] => {
  let min = Math.abs(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    min = Math.min(min, Math.abs(numbers[i]));
  }

  const result: number[] = [];

  if (min === 0) return numbers;

  for (const num of numbers) {
    result.push(num / min);
  }

  return result;
};

const divideBySum = (numbers: number[]) => {
  const sum = numbers.reduce((acc, curr) => (acc += curr), 0);

  return numbers.map((item) => toFixedNumber(item / sum, 2));
};
