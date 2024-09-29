import * as bcrypt from 'bcrypt';

export const generateRandomString = ({
  length,
  uppercase = false,
  lowercase = false,
  numerical = false,
  special = false,
}: {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numerical?: boolean;
  special?: boolean;
}): string => {
  if (isNaN(length)) {
    throw new TypeError('Length must be a number');
  }
  if (length < 1) {
    throw new RangeError('Length must be at least 1');
  }

  let result = '';
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberCharacters = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=';
  let characters = '';
  if (uppercase) {
    characters += upperCaseAlphabet;
  }
  if (lowercase) {
    characters += lowerCaseAlphabet;
  }
  if (numerical) {
    characters += numberCharacters;
  }
  if (special) {
    characters += specialCharacters;
  }

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export const validateData = (
  data: string,
  hashedData: string,
): Promise<boolean> => {
  return bcrypt.compare(data, hashedData);
};

export const hashData = (data: string): Promise<string> => {
  return bcrypt.hash(data, 10);
};

export const getPairwiseCombinations = (ids: number[]) => {
  const combinations: number[][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      combinations.push([ids[i], ids[j]]);
    }
  }
  return combinations;
};

export const sortCombinations = (combinations: number[][], order: number[]) => {
  const getScore = (item: number) => order.findIndex((el) => el === item);

  const sorted = [...combinations];

  sorted.sort((c1, c2) => {
    const c1Score = getScore(c1[0]) + getScore(c1[1]);
    const c2Score = getScore(c2[0]) + getScore(c2[1]);

    return c1Score - c2Score;
  });

  return sorted;
};

export const sortCombinationsByImplicitCategory = (
  combinations: number[][],
  getImplicitCat: (id: number) => string,
) => {
  const getScore = (id1: number, id2: number) =>
    getImplicitCat(id1) === getImplicitCat(id2) ? 1 : -1;

  const sorted = [...combinations];

  sorted.sort((c1, c2) => {
    const c1Score = getScore(c1[0], c1[1]);
    const c2Score = getScore(c2[0], c2[1]);

    return c2Score - c1Score;
  });

  return sorted;
};

export const sortProjectId = (
  project1Id: number,
  project2Id: number,
): [number, number] => {
  return project1Id > project2Id
    ? [project2Id, project1Id]
    : [project1Id, project2Id];
};

export const STAGING_API = 'pairwise.cupofjoy.store';

export function areEqualNumberArrays(
  array1: number[],
  array2: number[],
  // arr3: number[],
): boolean {
  const arr1 = [...array1];
  const arr2 = [...array2];
  const N = arr1.length;
  const M = arr2.length;
  // const O = arr3.length;

  // If lengths of array are not equal means array are not equal
  if (N !== M /* || N !== O || M !== O */) return false;

  // Sort both arrays
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  // arr3.sort((a, b) => a - b);

  // Linearly compare elements
  for (let i = 0; i < N; i++)
    if (arr1[i] !== arr2[i] /* || arr1[i] !== arr3[i] || arr2[i] !== arr3[i]*/)
      return false;

  // If all elements were same.
  return true;
}
