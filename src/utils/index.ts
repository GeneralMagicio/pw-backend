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

// The highest priority is pairs with the same sub-category
// and least occurance (same sub-category is the first differentiator though)
export const sortCombinationsByImplicitCategoryAndOccurance = (
  combinations: number[][],
  getProjectOccurances: (id: number) => number,
  getImplicitCat: (id: number) => string,
  getImplicitCatScore: (cat: string) => number,
) => {
  const compareImplicitCat = (id1: number, id2: number) =>
    getImplicitCat(id1) === getImplicitCat(id2) ? 1 : -1;

  const sorted = [...combinations];

  sorted.sort((c1, c2) => {
    const c1Score =
      getImplicitCatScore(getImplicitCat(c1[0])) +
      getImplicitCatScore(getImplicitCat(c1[1])) +
      compareImplicitCat(c1[0], c1[1]) -
      getProjectOccurances(c1[0]) -
      getProjectOccurances(c1[1]);
    const c2Score =
      getImplicitCatScore(getImplicitCat(c2[0])) +
      getImplicitCatScore(getImplicitCat(c2[1])) +
      compareImplicitCat(c2[0], c2[1]) -
      getProjectOccurances(c2[0]) -
      getProjectOccurances(c2[1]);

    console.log('score of', c1, '=', c1Score);
    console.log('score of', c2, '=', c2Score);
    return c2Score - c1Score;
  });

  return sorted;
};

// Seeded random number generator
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Generate a random number between 0 and 1
  random(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
}

// Fisher-Yates shuffle algorithm
export function shuffleArraySeeded<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  const random = new SeededRandom(seed);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

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
