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

const toFixedNumber = (num: number, digits: number) => {
  const pow = Math.pow(10, digits);
  return Math.round(num * pow) / pow;
};

export const calculateCollectionRanking = (input: number[][]) => {
  let votesMatrix = [...input];

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
      votesMatrix[j][i] = votesMatrix[j][i] / sum;
    }
  }

  // add a damping factor
  const dampingFactor = 0.9;

  const dampingMatrix = matrix(
    Array(length).fill(Array(length).fill((1 - dampingFactor) / length)),
  );

  votesMatrix = add(
    multiply(dampingFactor, votesMatrix),
    dampingMatrix,
  ).valueOf() as number[][];

  // compute the eigenvalue
  const { values, vectors } = eigs(votesMatrix, 0.01);

  console.log('values', values);
  console.log('vectors', vectors);

  const index = findEigenvalueOfOne(values as any);

  console.log('index:', index);

  const eigenvectors = vectors
    .map((_, index, self) => column(self, index))
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

// const checkConstantSign = (array: number[]) => {
//   let index = 1;
//   const sum = array[0];
//   const direction = sum > 0 ? 'positive' : 'negative';
//   while (index < array.length) {
//     if (array[index] > 0 && direction === 'negative') return false;
//     if (array[index] < 0 && direction === 'positive') return false;

//     index++;
//   }

//   return true;
// };

// const result = calculateCollectionRanking([[0, 1, 0, 1], [0, 0, 1, 1], [1, 0, 0, 0], [0, 0, 1, 0]])
// const result = calculateCollectionRanking([
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 1],
//   [0, 1, 0, 0],
// ]);
// const result = calculateCollectionRanking([
//   [0, 1, 0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 0, 0, 1],
//   [1, 0, 0, 1, 1, 0, 0],
//   [0, 1, 0, 0, 0, 1, 1],
//   [1, 1, 0, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 0],
// ]);

// console.log("eigenvalues:", result.values)
// console.log("eigenvectors:", result.vectors)
// console.log("---------------------")

// // // console.log(result.vectors)

// console.log(result);

// console.log(column(result.vectors, 0))
// console.log(column(result.vectors, 1))
// console.log(column(result.vectors, 2))

// const res = column(result.vectors, 3).map((row) => re(row))
